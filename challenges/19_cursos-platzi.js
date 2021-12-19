function learn(time, courses) {
  let selectedCourses = [];
  let maxUsedHours = 0;

  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] > maxUsedHours && courses[i] + courses[j] <= time) {
        selectedCourses = [i, j];
        maxUsedHours = courses[i] + courses[j];
      }
    }
  }

  return ( selectedCourses.length == 0 ? null : selectedCourses );
}

console.log( learn(15, [2, 10, 4, 1]) ) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

console.log( learn(25, [10, 15, 20, 5]) ) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

console.log( learn(4, [10, 14, 20]) ) // null -> no nos da tiempo a hacer dos cursos