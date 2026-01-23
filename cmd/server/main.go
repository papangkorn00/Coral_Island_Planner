package main

import (
	"coral-island-crop-planner-backend/config"
	"coral-island-crop-planner-backend/internal/handlers"
	"coral-island-crop-planner-backend/internal/repository"
	"coral-island-crop-planner-backend/internal/services"

	"github.com/gin-gonic/gin"
)

func main() {
	// 1. DB Connection
	db := config.ConnectDB()

	// Dependency Injection following by orders of the layers
	cropRepo := repository.NewCropRepository(db)
	cropService := services.NewCropService(cropRepo)
	cropHandler := handlers.NewCropHandler(cropService)

	r := gin.Default()

	// Routes
	r.GET("/crops", cropHandler.GetAllCrops)

	// Run on this port
	r.Run(":8080")
}
