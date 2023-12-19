# 1Clock fuses analog & digital timekeeping seamlessly. A stunning glassmorphic design showcases the elegance of the analog clock's hour, minute, and second hands. The digital display provides periods indications to keep you on schedule. An immersive time-telling experience combining classical and contemporary design makes 1Clock more than just a clock.


[] 1. instant clock time change when timezone switches.
[] 2. if any delay in changing the timezone useState then show the loader.
[] 3. add framer motion between 
    [] 1. analog to digital transition
    [] 2. circle & triangle color change
    [] 3. animation on earth rotation

Country data map: https://geojson-maps.ash.ms/
country-state-city data: https://dr5hn.github.io/countries-states-cities-database/

Certainly! These commit types follow the conventional commit specification, often used with tools like semantic versioning and release management. Here's an explanation of each common commit type in terms of Git commits:

build: Changes that affect the build system or external dependencies (e.g., npm, make).

bash
Copy code
git commit -m "build: update build configuration"
chore: Routine tasks, maintenance, or housekeeping chores that are not related to the production code (e.g., updating tasks, tools).

bash
Copy code
git commit -m "chore: clean up unused files"
ci: Changes to the continuous integration (CI) configuration and scripts.

bash
Copy code
git commit -m "ci: configure Travis CI for automated builds"
docs: Documentation changes, including both code comments and documentation files.

bash
Copy code
git commit -m "docs: update README with usage instructions"
feat: A new feature introduced to the codebase.

bash
Copy code
git commit -m "feat: add user authentication feature"
fix: A bug fix in the code.

bash
Copy code
git commit -m "fix: resolve issue with user login"
perf: Performance improvements or optimizations in the code.

bash
Copy code
git commit -m "perf: optimize rendering for faster page loads"
refactor: Code changes that neither fix a bug nor add a feature, typically restructuring or cleaning up code.

bash
Copy code
git commit -m "refactor: simplify function implementation"
revert: Reverting a previous commit.

bash
Copy code
git commit -m "revert: revert changes made in commit abc123"
style: Code style changes (e.g., formatting, indentation) that do not affect the logic.

bash
Copy code
git commit -m "style: format code according to style guide"
test: Adding or modifying tests.

bash
Copy code
git commit -m "test: add unit tests for authentication module"