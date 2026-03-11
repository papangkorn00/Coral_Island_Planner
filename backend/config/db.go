package config

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Global Variable for other packages
var DB *gorm.DB

func ConnectDB() *gorm.DB {
	// 1. Load .env file
	if err := godotenv.Load(); err != nil {
		if err := godotenv.Load("../.env"); err != nil {
			fmt.Println("Note: .env file not found. Relying on System Environment Variables.")
		}
	}

	// 2. Data Source Name
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	// 3. Connect via GORM
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// 4. Assign to global variable
	DB = db
	log.Println("PostgreSQL connected successfully!")

	return DB
}
