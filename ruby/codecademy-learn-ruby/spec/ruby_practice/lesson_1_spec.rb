# frozen_string_literal: true

require "spec_helper"
require "ruby_practice/lesson_1"

module RubyPractice
  RSpec.describe Lesson1 do
    it "my_num function should output the miles per hour" do
      expect { described_class.my_num }.to output("Miles per hour: 50.8\n").to_stdout
    end

    it "my_boolean function should output 'Better wear shorts today!'" do
      expect { described_class.my_boolean }.to output("true\nBetter wear shorts today!\n").to_stdout
    end

    it "my_string function should output 'My name is Eric.'" do
      expect { described_class.my_string }.to output("My name is Eric.\n").to_stdout
    end

    it "arrays function should output 'The first element is: true'" do
      expect { described_class.arrays }.to output("The first element is: true\n").to_stdout
    end

    it "hash function should output 'Kara Brennan is 29 years old.'" do
      expect { described_class.hash }.to output("Kara Brennan is 29 years old.\n").to_stdout
    end

    it "symbol function should output 'Melbourne'" do
      expect { described_class.symbol }.to output("Melbourne\nLeBron James\nSteph Curry\n").to_stdout
    end

    it "puts_print function should output 'Hello, World!' and 'This is on a new line.'" do
      expect { described_class.puts_print }.to output("Hello, World!\nHello, World!This is on a new line.\n").to_stdout
    end

    it "string_manipulation function should output the length, reverse, uppercase, and lowercase of the string" do
      expected_output = <<~OUTPUT
        Length of the string: 17
        Reverse of the string: .enil wen a si sihT
        Uppercase of the string: ERIC
        Lowercase of the string: eric
        Trimmed new line: This is a string.
        Trimmed whitespace: This is a string.
        Capitalized string: Eric
      OUTPUT
      expect { described_class.string_manipulation }.to output(expected_output).to_stdout
    end
  end
end
