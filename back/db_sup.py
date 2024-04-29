import supabase
import bcrypt
import datetime
import uuid
import os

# Получение значения переменной среды
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_KEY')

# Подключение к Supabase
supabase_client = supabase.create_client(supabase_url, supabase_key)

# Методы для работы с пользователями в базе данных Supabase
class SupabaseUserClient:
    def insert_user(self, email, hashed_password):
        supabase_client.table('users').insert({'email': email, 'hashed_password': hashed_password}).execute()
    
    def get_user_by_email(self, email):
        return supabase_client.table('users').select('*').eq('email', email).execute()
    
    def save_reset_token(self, user_id, reset_token, expires_at):
        supabase_client.table('users').update({'reset_token': reset_token, 'reset_token_expires_at': expires_at}).eq('id', user_id).execute()
    
    def get_user_by_reset_token(self, token):
        return supabase_client.table('users').select('*').eq('reset_token', token).execute()
    
    def update_user_password(self, user_id, hashed_password):
        supabase_client.table('users').update({'hashed_password': hashed_password, 'reset_token': None, 'reset_token_expires_at': None}).eq('id', user_id).execute()

# Создание экземпляра клиента для работы с пользователями
user_client = SupabaseUserClient()

# Регистрация пользователя
def register_user(email, password):
    hashed_password = bcrypt.hash(password)
    user_client.insert_user(email, hashed_password)

# Аутентификация пользователя
def authenticate_user(email, password):
    user = user_client.get_user_by_email(email)
    if user and bcrypt.verify(password, user['hashed_password']):
        return True
    return False

# Генерация и сохранение токена для сброса пароля
def generate_reset_token(email):
    user = user_client.get_user_by_email(email)
    if user:
        reset_token = str(uuid.uuid4())
        expires_at = datetime.datetime.now() + datetime.timedelta(hours=1)  # Срок действия токена: 1 час
        user_client.save_reset_token(user['id'], reset_token, expires_at)
        return reset_token
    return None

# Проверка и сброс пароля по токену
def reset_password_with_token(token, new_password):
    user = user_client.get_user_by_reset_token(token)
    if user and user['reset_token_expires_at'] > datetime.datetime.now():
        hashed_password = bcrypt.hash(new_password)
        user_client.update_user_password(user['id'], hashed_password)
        return True
    return False