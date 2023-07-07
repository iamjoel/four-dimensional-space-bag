import os
from dotenv import load_dotenv
from langchain.llms import OpenAI

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

llm = OpenAI(
    openai_api_key=OPENAI_API_KEY)
res = llm.predict(
    "What would be a good company name for a company that makes colorful socks?")

print(res)
