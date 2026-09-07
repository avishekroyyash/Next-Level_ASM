
function validateUsername(name) {
    name = name.toLowerCase();

    if (name.length < 4) {
          return "Too Short";
    }

    if (name.includes(" ")) {
          return "No Space Allowed";
    }

    if (name.includes("admin")) {
         return "Reserved Word";
    }

  return "Available";
}

const result = validateUsername("Fln003");

 console.log(result);

