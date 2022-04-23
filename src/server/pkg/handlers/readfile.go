package handlers

import (
	"io"
	"os"
)

//read a file and return its content as a string
func ReadFile(filename string) string {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	var content []byte
	buf := make([]byte, 1024)
	for {
		n, err := file.Read(buf)
		if err != nil && err != io.EOF {
			panic(err)
		}
		if n == 0 {
			break
		}
		content = append(content, buf[:n]...)
	}
	return string(content)
}
