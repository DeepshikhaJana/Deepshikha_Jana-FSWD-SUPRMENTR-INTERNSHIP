/**
 * Student Manager Program
 * Uses arrays and objects to store and process student information.
 */

// 1. Main Array of Student Objects
// Each student object contains a name and an array of mark objects.
let students = [
  {
    name: "Alice Smith",
    marks: [
      { subject: "Math", score: 85 },
      { subject: "Science", score: 92 },
      { subject: "Hindi", score: 78 },
      { subject: "English", score: 88 },
    ],
  },
  {
    name: "Bob Johnson",
    marks: [
      { subject: "Math", score: 72 },
      { subject: "Science", score: 65 },
      { subject: "Hindi", score: 80 },
      { subject: "English", score: 75 },
    ],
  },
];

/**
 * Function to calculate total and average marks for a student
 * @param {Object} student - The student object
 * @returns {Object} - Object containing total and average
 */
function calculateResults(student) {
  // Accessing the 'marks' array within the student object
  const scores = student.marks.map((m) => m.score);

  // Basic arithmetic operations: Addition for total, division for average
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average =
    scores.length > 0 ? (total / scores.length).toFixed(2) : "0.00";

  return { total, average };
}

/**
 * Function to process all students and log to console (Looping through the main array)
 */
function processStudents() {
  console.log("--- Student Manager: Performance Report ---");

  students.forEach((student, index) => {
    const { total, average } = calculateResults(student);

    console.log(`${index + 1}. Student: ${student.name}`);
    console.log(
      "Marks:",
      student.marks.map((m) => `${m.subject}: ${m.score}`).join(", ")
    );
    console.log(`Total: ${total}, Average: ${average}`);
    console.log("-----------------------------------------");
  });
}

/**
 * Function to add a new student (Pushing to the main students array)
 * @param {string} name - Student name
 * @param {Array} marksArray - Array of {subject, score} objects
 */
function addStudent(name, marksArray) {
  if (!name || marksArray.length === 0) return;

  // Creating a new student object and storing the marks array inside it
  const newStudent = {
    name: name,
    marks: marksArray,
  };

  // Adding the new object to the main students array
  students.push(newStudent);

  updateUI();
}

/**
 * Function to delete a student from the array
 * @param {number} index - The index of the student in the array
 */
function deleteStudent(index) {
  students.splice(index, 1);
  updateUI();
}

/**
 * Function to update both the console and the webpage
 */
function updateUI() {
  processStudents();
  if (typeof document !== "undefined") {
    renderStudentsToWebpage();
  }
}

/**
 * Function to render student data on the webpage (Looping to display data)
 */
function renderStudentsToWebpage() {
  const studentContainer = document.getElementById("student-list");
  if (!studentContainer) return;

  let htmlContent = "";

  students.forEach((student, index) => {
    const { total, average } = calculateResults(student);
    const marksList = student.marks
      .map(
        (m) => `<li><span>${m.subject}:</span> <strong>${m.score}</strong></li>`
      )
      .join("");

    htmlContent += `
            <div class="student-card">
                <button class="delete-btn" onclick="deleteStudent(${index})">&times;</button>
                <h3>${student.name}</h3>
                <div class="marks-info">
                    <ul>${marksList}</ul>
                    <hr>
                    <div class="results">
                        <p>Total Marks: <strong>${total}</strong></p>
                        <p>Average Marks: <strong>${average}</strong></p>
                    </div>
                </div>
            </div>
        `;
  });

  studentContainer.innerHTML =
    htmlContent ||
    '<p style="text-align:center; grid-column: 1/-1;">No students added yet.</p>';
}

/**
 * Global function to handle form submission
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("studentName");
  const mathScore = parseInt(document.getElementById("mathScore").value) || 0;
  const scienceScore =
    parseInt(document.getElementById("scienceScore").value) || 0;
  const historyScore =
    parseInt(document.getElementById("historyScore").value) || 0;
  const englishScore =
    parseInt(document.getElementById("englishScore").value) || 0;

  // Creating the marks array for the student object
  const marksArray = [
    { subject: "Math", score: mathScore },
    { subject: "Science", score: scienceScore },
    { subject: "History", score: historyScore },
    { subject: "English", score: englishScore },
  ];

  addStudent(nameInput.value, marksArray);

  // Resetting the form for the next entry
  event.target.reset();
  updateLiveSummary(); // Hide summary after reset
}

/**
 * Function to update live calculation preview
 */
function updateLiveSummary() {
  const mathScore = parseInt(document.getElementById("mathScore").value) || 0;
  const scienceScore =
    parseInt(document.getElementById("scienceScore").value) || 0;
  const historyScore =
    parseInt(document.getElementById("historyScore").value) || 0;
  const englishScore =
    parseInt(document.getElementById("englishScore").value) || 0;

  const scores = [mathScore, scienceScore, historyScore, englishScore];
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = (total / scores.length).toFixed(2);

  const liveSummary = document.getElementById("liveSummary");
  const liveTotal = document.getElementById("liveTotal");
  const liveAverage = document.getElementById("liveAverage");

  if (liveSummary && liveTotal && liveAverage) {
    liveTotal.textContent = total;
    liveAverage.textContent = average;

    // Show summary if any score is entered
    if (total > 0) {
      liveSummary.style.display = "block";
    } else {
      liveSummary.style.display = "none";
    }
  }
}

// Initial processing
updateUI();

// Setup event listeners if in a browser environment
if (typeof document !== "undefined") {
  window.onload = () => {
    const form = document.getElementById("studentForm");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);

      // Add live listeners for each score input
      ["mathScore", "scienceScore", "historyScore", "englishScore"].forEach(
        (id) => {
          const input = document.getElementById(id);
          if (input) {
            input.addEventListener("input", updateLiveSummary);
          }
        }
      );
    }
  };
}

// Exporting functions for potential testing/deletion access in browser
if (typeof window !== "undefined") {
  window.deleteStudent = deleteStudent;
}
