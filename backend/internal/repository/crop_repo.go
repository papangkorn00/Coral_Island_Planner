package repository

import (
	"coral-island-crop-planner-backend/internal/models"

	"gorm.io/gorm"
)

// 1. Define Interface (เผื่อไว้ทำ Mock Test ในอนาคต)
type CropRepository interface {
	GetAll() ([]models.Crop, error)
}

// 2. Implementation (ของจริงที่ใช้ GORM)
type cropRepositoryDB struct {
	db *gorm.DB
}

func NewCropRepository(db *gorm.DB) CropRepository {
	return &cropRepositoryDB{db: db}
}

func (r *cropRepositoryDB) GetAll() ([]models.Crop, error) {
	var crops []models.Crop
	result := r.db.Find(&crops)
	if result.Error != nil {
		return nil, result.Error
	}
	return crops, nil
}
