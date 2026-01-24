package routes

import (
	"coral-island-crop-planner-backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine, cropHandler *handlers.CropHandler) {

	// Routes
	api := r.Group("/api")
	{
		api.GET("/crops", cropHandler.GetAllCrops)
	}
}
