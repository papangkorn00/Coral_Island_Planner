# Stage 1: Build stage
FROM golang:1.25.6-alpine AS builder

# set-up working directory
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main ./cmd/server

# Stage 2: Final stage
FROM alpine:latest AS final
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
