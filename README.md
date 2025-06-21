## MongoDB Fundamentals Assignment

### Student Info

**Name:** Ivy Muthoni

###  MongoDB Setup

* **Database Type:** MongoDB Atlas
* **Connection Tool:** MongoDB Compass
* **Cloud Cluster:** Cluster0009
* **Authentication:** Username/password connection string



### Tools Used

* **Code Editor:** Visual Studio Code
* **MongoDB Client:** MongoDB Compass
* **Node Runtime:** Node.js v22.14.0
* **Shell Environment:** Windows Subsystem for Linux (WSL)
* **Terminal:** PowerShell & Ubuntu Terminal
* **Version Control:** Git (via WSL)


### Issues Faced

* Initial attempts to clone the GitHub repo failed due to `git` not being installed in PowerShell; resolved by using WSL.
* MongoDB local installation failed due to missing dependencies (e.g., `libssl1.1`); switched to MongoDB Atlas instead.
* Encountered authentication and URI formatting issues when connecting to Atlas from Compass (password special characters needed URL encoding).
* Resolved package issues (`mongodb` module not found) by running `npm install mongodb`.


### Notes

* Successfully connected Atlas to Compass and ran queries and aggregation pipelines.
* Populated the database using the provided `insert_books.js` script.
* Created `queries.js` with all required MongoDB operations.

