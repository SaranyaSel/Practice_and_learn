# Practice_and_learn
Practice and learn things

ionic refresh
ionic-refresh/README.md

## Code Kata Setup

### in Ruby

setup directory

```sh
mkdir demo-code-kata
cd demo-code-kata
asdf local ruby 3.3.4
```

add rspec test suite

```sh
bundle init                 # generates a blank Gemfile
bundle add rspec            # adds rspec to Gemfile
bundle exec rspec --init    # configures spec/spec_helper.rb etc

# add --format documentation to .rspec file
bundle exec rspec
```

Create a test file

```sh
cat <<EOF > spec/yet_another_code_kata_spec.rb
# frozen_string_literal: true

require 'yet_another_code_kata'

RSpec.describe YetAnotherCodeKata do
  it('returns true, as there is always another code kata') do
    yet_another_code_kata = YetAnotherCodeKata.new
    expect(yet_another_code_kata.run).to eq true
  end
end
EOF
```

That will fail ❌ [🅁 🄴 🄳 ], so let's create a simple implementation

```sh
mkdir lib
cat <<EOF > lib/yet_another_code_kata.rb
# frozen_string_literal: true

class YetAnotherCodeKata
  def run()= true
end
EOF
```

### in Python

make sure you have python

```sh
asdf plugin add python
# check you have a recent python
asdf local python 3.10.4
python --version
Python 3.10.4
```

create virtual environment

```sh
# -m mod : run library module as a script (terminates option list)
python -m venv .venv
# alternatively could call it something like `pytest-env`
# with:
#   pytest -m venv pytest-env

# activate the virtual environemnt
source .venv/bin/activate
```

install a test framework

```sh
# generate a requirements.txt file of required modules
cat <<EOF > requirements.txt
pytest
EOF
pip install -r requirements.txt
```

generate a test file

```sh
cat <<EOF > test_capitalize.py
def capital_case(x):
       return x.capitalize()

def test_capital_case():
       assert capital_case('semaphore') == 'Semaphore'
EOF
```

run the test

```sh
pytest
# in verbose mode
pytest -vvv
```

finally to leave the virtual env run

```sh
deactivate
```

### in Typescript

setup NPM and add Jest for testing

```sh
# cd into directory created for ruby
cd demo-code-kata
asdf local nodejs 20.10.0

npm init --yes

echo $(jq '.scripts.test="jest"' package.json) | jq . \
    | > package_new.json && mv package{_new,}.json

npm install --save-dev jest typescript @types/jest
```

Install and configure babel

```sh
npm install --save-dev @babel/preset-env @babel/preset-typescript

cat <<EOF > babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
EOF
```

Create a test file

```sh
cat <<EOF > yet-another-code-kata.test.ts
import yetAnotherCodeKata from './yet-another-code-kata';

describe("yet another code kata", () => {
  it("returns true, as there is always another code kata", () => {
    expect(yetAnotherCodeKata()).toEqual(true);
  });
});
EOF
```

That will fail ❌ [🅁 🄴 🄳 ], so let's create a simple implementation

```sh
cat <<EOF > yet-another-code-kata.ts
export default () => true;
EOF
```

Tests should now pass ✅ [🄶 🅁 🄴 🄴 🄽 ]
```sh
npm test
# run in watch mode to update tests as they change
npm test -- --watch
```

### Angular + Cypress

Setting up a basic Angular + Cypress kata project to help better understand how
we can test our Mable FrontEnd (_which uses this technology at the time of
writing_)

```sh
# assuming a node and ng command is installed
asdf local nodejs 20.10.0
npm install -g @angular/cli

# create a minimal angular project
ng new game-of-life-ng --minimal

# start the app
cd game-of-life-ng
npm start
open http://localhost:4200/
```

now for Cypress

```sh
npm add cypress
# add a cypress run command similar to Mable
echo $(jq '.scripts."cy:open"="cypress open"' package.json) | jq . \
    | > package_new.json && mv package{_new,}.json
echo $(jq '.scripts."cy:run"="cypress run"' package.json) | jq . \
    | > package_new.json && mv package{_new,}.json

# run cypress first time: select angular and wait for setup
# TODO: is there an `npx cypress install --help` command?
# NOTE: may need to run a few times as it can get stuck on install
npm run cy:open -- --browser chrome --e2e
# Run the command as component to generate component config
npm run cy:open -- --browser chrome --component

# also set a baseUrl in cypress.config.js
  e2e: {
    baseUrl: "http://localhost:4200",
# assuming `npm start` runs on default port: 4200
```

Finally write an E2E test
```sh
cat <<EOF > cypress/e2e/game-of-life.cy.ts
describe("game of life", () => {
  it("renders the game", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome to game-of-life-ng!");
  });
});
EOF

# and run it
npm run cy:run -- --browser chrome --e2e
```

... and write a Component test

```sh
# generate a Game of Life "Cell" component
ng generate component game-of-life/cell

# and generate a simple test
cat <<EOF > src/app/game-of-life/cell/cell.component.cy.ts
import { CellComponent } from "./cell.component";

describe("CellComponent", () => {
  it("spawns to life with exactly 3 neighbours", () => {
    cy.mount(CellComponent, {
      componentProperties: {
        neighbours: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
        ],
        alive: false,
      },
    });

    cy.get("[data-testid=cell]").should("have.text", "👾");
  });
});
EOF
```

implement a simple solution

```sh
# NOTE: back ticks escaped for zsh cut & paste \`
cat <<EOF > src/app/game-of-life/cell/cell.component.ts
import { Component } from "@angular/core";

type Coordinate = "x" | "y";
type CellCoordinate = 0 | 1 | 2;
type NeighbourRecord = Record<Coordinate, CellCoordinate>;

@Component({
  selector: "app-cell",
  standalone: true,
  template: \`
    <div data-testid="cell" data-alive="alive">{{ alive ? '👾' : '' }}</div>
  \`,
  styles: '',
})
export class CellComponent {
  alive = false;
  neighbours: NeighbourRecord[] = [];
  ngOnInit() {
    if (!this.alive) {
      if (3 == this.neighbours.length) {
        this.alive = true;
      }
    }
  }
}
EOF
```

```sh
# and run it
npm run cy:run -- --browser chrome --component
```

