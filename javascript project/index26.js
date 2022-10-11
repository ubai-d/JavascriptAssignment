let alien_color1 = "red";

/* Write an if statement to test whether the alien’s color is red.
 If it is, print a message that the player just earned 10 points.*/

if (alien_color1 === "red") console.log("Player just eraned 10 points");

/* Write one version of this program that passes the if test and another
 that fails. (The version that fails will have no output.)*/
alien_color1 = "green";
if (alien_color1 === "red") {
  console.log("you earned 5 pints");
}