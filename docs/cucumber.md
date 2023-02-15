# cucumber tests

## with regex

```gherkin
Feature: Greeting

  Scenario: Greet the user by name
    Given I am on the login page
    When I enter my username "johndoe" and my password "password123"
    Then I should see a welcome message containing my name

  Scenario: Greet the user with a different name
    Given I am on the login page
    When I enter my username "janedoe" and my password "password456"
    Then I should see a welcome message containing my name
```

```python
from behave import *
import re

@given("I am on the login page")
def step_impl(context):
    # Code to navigate to the login page

@when('I enter my username "{username}" and my password "{password}"')
def step_impl(context, username, password):
    # Code to enter the username and password in the login form

@then('I should see a welcome message containing my name')
def step_impl(context):
    # Code to find the welcome message element and extract the username
    welcome_message = context.driver.find_element_by_css_selector(".welcome-message").text
    username = re.search(r"Welcome, (.+?)!", welcome_message).group(1)
    assert username == context.username
```

```python
from behave import *

@when('I enter the name "{name}"')
def step_impl(context, name):
    context.name = name

@then('the greeting should say "{greeting}"')
def step_impl(context, greeting):
    assert f"Hello, {context.name}!" == greeting
```

## with data tables

```gherkin
Feature: Shopping Cart
  As a customer
  I want to be able to add items to my shopping cart
  So that I can purchase them later

  Scenario: Add items to shopping cart
    Given I am on the shopping cart page
    When I add the following items to my shopping cart:
      | Item Name   | Quantity |
      | T-Shirt     | 2        |
      | Jeans       | 1        |
      | Sneakers    | 1        |
    Then I should see the following items in my shopping cart:
      | Item Name   | Quantity |
      | T-Shirt     | 2        |
      | Jeans       | 1        |
      | Sneakers    | 1        |
```

```py
from behave import *

@given('I am on the shopping cart page')
def step_impl(context):
    # Code to navigate to the shopping cart page

@when('I add the following items to my shopping cart:')
def step_impl(context):
    # Code to add the items to the shopping cart
    for row in context.table:
        item_name = row["Item Name"]
        quantity = row["Quantity"]
        # Code to add the item to the cart with the specified quantity

@then('I should see the following items in my shopping cart:')
def step_impl(context):
    # Code to get the items in the shopping cart
    items_in_cart = []
    for row in context.table:
        item_name = row["Item Name"]
        quantity = row["Quantity"]
        # Code to check if the item is in the cart with the specified quantity
        if item_name not in items_in_cart:
            assert False, f"{item_name} is not in the cart"
        elif items_in_cart.count(item_name) != int(quantity):
            assert False, f"{item_name} quantity is incorrect"
        else:
            items_in_cart.remove(item_name)
    if len(items_in_cart) != 0:
        assert False, "There are unexpected items in the cart"
```
