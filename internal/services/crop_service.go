package services

import (
	"coral-island-crop-planner-backend/internal/models"
	"coral-island-crop-planner-backend/internal/repository"
)

type CropService interface {
	GetCrops() ([]models.Crop, error)
}

type cropService struct {
	repo repository.CropRepository // call repository
}

func NewCropService(repo repository.CropRepository) CropService {
	return &cropService{repo: repo}
}

func (s *cropService) GetCrops() ([]models.Crop, error) {
	return s.repo.GetAll()
}
