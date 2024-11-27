.DEFAULT_GOAL := usage

.PHONY: build
build: install lint test

.PHONY: install
install:
	bundle install

.PHONY: test
test:
	bundle exec rspec

.PHONY: test-practice
test-practice:
	bundle exec rspec spec/ruby_practice

.PHONY: lint
lint:
	bundle exec rubocop

.PHONY: lint-fix
lint-fix:
	bundle exec rubocop --autocorrect-all

.PHONY: usage
usage:
	@echo "make build                  to lint and test"
	@echo "make test                   to run rspec"
	@echo "make lint                   to run rubocop"
	@echo "make lint-fix               to rubocop autocorrect-all"
	@echo

