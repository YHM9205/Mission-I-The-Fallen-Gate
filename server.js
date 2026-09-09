/* =========================================================
   MISSION I: THE FALLEN GATES OF CODORIA

   The Dark Bug has damaged the Royal Server!
   Work with your team to locate and repair THREE bugs.

   Do not delete the code and start again.
   Read the errors, test your ideas, and repair what is broken.
   ========================================================= */

const express = require('express')

const app = express()

app.get('/gate', function (req, res) {
  res.sent('🏰 The gates of Codoria are open!')
})
app.get('/king', function (req, res) {
  res.send('🏰 The gates of Codoria are open!')
})

app.listen(3000, function () {
  console.log('⚔️ Royal server is running on port 3000')
})

/* =========================================================
   ⭐ BONUS QUEST

   Create a new GET route for /king that displays:
   👑 Welcome, Your Majesty!
   ========================================================= */