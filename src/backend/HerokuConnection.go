package backend

import (
	"database/sql"

	_ "github.com/lib/pq"
)

func Create_Connection() {
	connStr := "user= tzvzdarvxebodn dbname= dbs3ru31etha1j password= d9571c32d6fc152d0ea6b64688a97bd85cc15de1f235dcb8972adbdfbd34dc56 host= ec2-3-209-124-113.compute-1.amazonaws.com port=5432"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}
}
