module RubyPractice
  class Lesson1
    # Ruby has different types of numbers such as integers and floating point numbers.
    def self.my_num
      # Integer type
      miles = 127

      # Float type
      hours = 2.5
      miles_per_hour = miles / hours

      puts "Miles per hour: #{miles_per_hour}"
      # Output: Miles per hour: 50.8
    end

    # A value of either true or false.
    def self.my_boolean
      temp = 100
      is_hot = temp > 80

      puts is_hot
      # Output: true

      if is_hot
        puts "Better wear shorts today!"
      else
        puts "Better wear long pants today!"
      end

      # Output: Better wear shorts today!
    end

    # A string is a sequence of characters that represents a word or a sentence. They are created by surrounding a sequence of characters with single or double quotes.
    def self.my_string
      my_name = "Eric"
      puts "My name is #{my_name}."
    end

    # Arrays store data in a list. An array can contain any type of data. Values are comma separated and enclosed in square brackets. Positions in the array start at 0.
    def self.arrays
      mixed_array = [true, 2, "three", 4.0]

      puts "The first element is: #{mixed_array[0]}"
      # Output: The first element is: true
    end

    # Hashes - A collection of key-value pairs enclosed within curly braces. Values are assigned to keys using the => syntax.
    def self.hash
      person = {
        first_name: "Kara",
        last_name: "Brennan",
        age: 29
      }

      puts "#{person[:first_name]} #{person[:last_name]} is #{person[:age]} years old."
      # Output: Kara Brennan is 29 years old.
    end

    # Symbols are a unique data type in Ruby. They are similar to strings except that they take up less memory and have better performance. Symbols are created by using the : syntax.
    def self.symbol
      basketball_team = {center: "Melbourne", forward: "LeBron James", guard: "Steph Curry"}

      puts basketball_team[:center]
      # Output: Melbourne

      puts basketball_team[:forward]
      # Output: LeBron James

      puts basketball_team[:guard]
      # Output: Steph Curry
    end

    # The print command just takes whatever you give it and prints it to the screen. puts (for “put string”) is slightly different: it adds a new (blank) line after the thing you want it to print. You use them like this:
    def self.puts_print
      puts "Hello, World!"
      # Output: Hello, World!
      # (with a new line after)

      print "Hello, World!"
      # Output: Hello, World!
      # (without a new line after)

      puts "This is on a new line."
      # Output: This is on a new line.
    end

    def self.string_manipulation
      length_of_string("This is a string.")

      reverse_of_string("This is a new line.")

      uppercase_of_string("Eric")

      lowercase_of_string("ERIC")

      trim_new_line("This is a string.\n")

      trim_whitespace("  This is a string.  ")

      capitalize("eric")
    end

    def self.length_of_string(some_string)
      print "Length of the string: "
      puts some_string.length
    end

    def self.reverse_of_string(some_string)
      print "Reverse of the string: "
      puts some_string.reverse
    end

    def self.uppercase_of_string(some_string)
      print "Uppercase of the string: "
      puts some_string.upcase
    end

    def self.lowercase_of_string(some_string)
      print "Lowercase of the string: "
      puts some_string.downcase
    end

    # this is single comment

=begin
    I'm a comment!
    I don't need any # symbols.
=end

    def self.trim_new_line(some_string)
      print "Trimmed new line: "
      puts some_string.chomp
    end

    def self.trim_whitespace(some_string)
      print "Trimmed whitespace: "
      puts some_string.strip
    end

    def self.capitalize(some_string)
      print "Capitalized string: "
      puts some_string.capitalize
    end

    def self.run
      my_num
      my_boolean
      my_string
      arrays
      hash
      symbol
      puts_print
      string_manipulation
    end
  end
end

# Call the methods to see the output
RubyPractice::Lesson1.run

# Output:
# Miles per hour: 50.8
# true
# Better wear shorts today!
# My name is Eric.
# The first element is: true
# Kara Brennan is 29 years old.
# Melbourne
# LeBron James
# Steph Curry
# Hello, World!
# Hello, World!This is on a new line.
# Length of the string: 22
# Reverse of the string: .enil wen a no si sihT
# Uppercase of the string: ERIC
# Lowercase of the string: eric
