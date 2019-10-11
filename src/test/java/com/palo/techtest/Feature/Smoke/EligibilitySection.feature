@Eligibility
Feature: Eligibility Section

  #--------------------------------  Scenario Flow 1 --------------------------------------------------#
  Background: 
    Given Launching the browser

  @Testj
  Scenario Outline: Verify that user should able to access the Four questions in the Eligibility section
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen
    Then Question "1" is displayed as follows
      | Is the applicant registered in Singapore? |
      | Yes                                       |
      | No                                        |
  	   Then Question "2" is displayed as follows
      | Is the applicant's group sales turnover less than or equal to S$100m or is the applicant's group employment size less than or equal to 200? |
      | Yes                                                                                                                                         |
      | No                                                                                                                                          |

    Then Question "3" is displayed as follows
      | Does the applicant have at least 30% local equity? |
      | Yes                                                |
      | No                                                 |

    Then Question "4" is displayed as follows
      | Are all the following statements true for this project?                                                                           |
      | The applicant has not started work on this project                                                                                |
      | The applicant has not made any payment to any supplier, vendor, or third party prior to applying for this grant                   |
      | The applicant has not signed any contractual agreement with any supplier, vendor, or third party prior to applying for this grant |
      | Yes                                                                                                                               |
      | No  																															  |
    And user should able to logged out successfully
 	And close browser
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|
    
    
  @AC-2
  Scenario Outline: verifying the radio buttons Yes/No is displayed for each question and able to select Yes/No radio
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen
    Then Question "1" has following radio buttons
      | Yes |
      | No  |
    Then Question "2" has following radio buttons
      | Yes |
      | No  |
    Then Question "3" has following radio buttons
      | Yes |
      | No  |
    Then Question "4" has following radio buttons
      | Yes |
      | No  |
    When user selects the radio button as "Yes" and verified for the question 1
    When user selects the radio button as "No" and verified for the question 1
    When user selects the radio button as "Yes" and verified for the question 2
    When user selects the radio button as "No" and verified for the question 2
    When user selects the radio button as "Yes" and verified for the question 3
    When user selects the radio button as "No" and verified for the question 3
    When user selects the radio button as "Yes" and verified for the question 4
    When user selects the radio button as "No" and verified for the question 4
    And user should able to logged out successfully
 	And close browser
          
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|
    
  @AC-3
  Scenario Outline: verifying the warning message on selecting "No" radio button for any of the question
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen
    When user selects the radio button as "No" and verified for the question 1
    Then warning message "<WarningMessage>" is displayed for question 1
    When user selects the radio button as "No" and verified for the question 2
    Then warning message "<WarningMessage>" is displayed for question 2
    When user selects the radio button as "No" and verified for the question 3
    Then warning message "<WarningMessage>" is displayed for question 3
    When user selects the radio button as "No" and verified for the question 4
    Then warning message "<WarningMessage>" is displayed for question 4
    And user should able to logged out successfully
 	And close browser        
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|WarningMessage																				|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|Visit Smart Advisor on the SME Portal for more information on other government assistance.	|
    
    
  @AC-4
  Scenario Outline: verifying the warning message link is open in new tab
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen
    When user selects the radio button as "No" and verified for the question 1
    When user clicks on Smart Adviser Link
    Then a website is launched in another window with url "https://www.smeportal.sg/content/smeportal/en/moneymatters.html#saText"
  	And user should able to logged out successfully
 	And close browser
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|  
    
    
   
  @AC-5
  Scenario Outline: Verify that user should able to validate the saved values after refresh the page
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen
    When user selects the radio button as "Yes" and verified for the question 1
    When user selects the radio button as "Yes" and verified for the question 2
    When user selects the radio button as "Yes" and verified for the question 3
    When user selects the radio button as "No" and verified for the question 4
    When user clicks on save button
    And user refreshes the page
    Then "Yes" radio is selected for question "1"
    Then "Yes" radio is selected for question "2"
    Then "Yes" radio is selected for question "3"
    Then "No" radio is selected for question "4"
  	And user should able to logged out successfully
 	And close browser
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|  
    
    
    