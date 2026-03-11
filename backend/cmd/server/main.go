package main

import (
	"coral-island-crop-planner-backend/config"
	"coral-island-crop-planner-backend/internal/handlers"
	"coral-island-crop-planner-backend/internal/repository"
	"coral-island-crop-planner-backend/internal/routes"
	"coral-island-crop-planner-backend/internal/services"
	"coral-island-crop-planner-backend/internal/models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// 1. DB Connection
	db := config.ConnectDB()

	config.DB.AutoMigrate(&models.Crop{})

	// Dependency Injection following by orders of the layers
	cropRepo := repository.NewCropRepository(db)
	cropService := services.NewCropService(cropRepo)
	cropHandler := handlers.NewCropHandler(cropService)

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:  []string{"http://localhost:5173"},
		AllowMethods:  []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:  []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders: []string{"Content-Length"},
	}))

	routes.SetupRoutes(r, cropHandler)

	// Run on this port
	r.Run(":8080")
}
