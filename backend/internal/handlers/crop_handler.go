package handlers

import (
	"coral-island-crop-planner-backend/internal/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CropHandler struct {
	service services.CropService
}

func NewCropHandler(service services.CropService) *CropHandler {
	return &CropHandler{service: service}
}

// Get all crop
func (h *CropHandler) GetAllCrops(c *gin.Context) {
	crops, err := h.service.GetCrops()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, crops)
}
