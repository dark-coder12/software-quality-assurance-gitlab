Feature: Merging and closing pull request

Scenario: Merging and closing request
    Given I am on logged into my existing GitHub account
    And I am currently on my desired repository
    When I navigate to Test Repositorys pull request tab
    And I open the my created pull request
    Then GitHub redirects me to my pull request
    When I press close the pull request button
    Then GitHub closes my pull request
    When I reopen pull request
    And I select merge pull request option
    And I enter merge commit messgae
    And I press confirm merge button
    Then GitHub merges changes to main branch
    When I press delete branch button
    Then GitHub deletes current branch
