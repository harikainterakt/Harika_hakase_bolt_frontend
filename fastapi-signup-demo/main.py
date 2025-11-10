from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, User
from passlib.context import CryptContext

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()

origins = [
    "http://localhost:5173",  # React dev server
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # or ["*"] to allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- ROUTES ---


class AuthData(BaseModel):
    email: str
    password: str

@app.post("/signup")
def signup(data: AuthData, db: Session = Depends(get_db)):
    email = data.email
    password = data.password
    existing_user = db.query(User).filter(User.email == email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_pwd = pwd_context.hash(password)
    user = User(email=email, password=hashed_pwd)
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"message": "User created successfully", "user_id": user.id}

@app.post("/login")
def login(data: AuthData, db: Session = Depends(get_db)):
    email = data.email
    password = data.password
    user = db.query(User).filter(User.email == email).first()
    if not user or not pwd_context.verify(password, user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "Login successful"}


# @app.post("/signup")
# def signup(email: str, password: str, db: Session = Depends(get_db)):
#     # Check if user already exists
#     existing_user = db.query(User).filter(User.email == email).first()
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     # Hash password and save user
#     hashed_pwd = pwd_context.hash(password)
#     user = User(email=email, password=hashed_pwd)
#     db.add(user)
#     db.commit()
#     db.refresh(user)
#     return {"message": "User created successfully", "user_id": user.id}

# @app.post("/login")
# def login(email: str, password: str, db: Session = Depends(get_db)):
#     user = db.query(User).filter(User.email == email).first()
#     if not user or not pwd_context.verify(password, user.password):
#         raise HTTPException(status_code=400, detail="Invalid credentials")
#     return {"message": "Login successful"}
