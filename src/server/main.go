// package main

// import (
// 	"net/http"

// 	"github.com/labstack/echo/v4"
// )

// func main() {
// 	e := echo.New()
// 	e.GET("/", func(c echo.Context) error {
// 		return c.String(http.StatusOK, "Hello, World!")
// 	})
// 	e.Logger.Fatal(e.Start("127.0.0.1:3000"))
// }

// package main

// import "github.com/gofiber/fiber/v2"

// func main() {
//   app := fiber.New()

//   app.Get("/", func(c *fiber.Ctx) error {
//     return c.SendString("Hello, World!")
//   })

//   app.Listen("127.0.0.1:3000")
// }

package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run("127.0.0.1:8080")
}