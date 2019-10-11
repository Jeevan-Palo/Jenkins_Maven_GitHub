@Form_Submission
Feature: Form Submission Section

  #--------------------------------  Scenario Flow 1 --------------------------------------------------#
  Background: 
    Given Launching the browser
    Given User login with own "G3377467U" "Testing" "T12LL1368D" "Acceptor"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
	When user selects the radio button as "Yes" and verified for the question 1
    When user selects the radio button as "Yes" and verified for the question 2
    When user selects the radio button as "Yes" and verified for the question 3
    When user selects the radio button as "Yes" and verified for the question 4
    When user clicks on save button      
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS" 	
    When user should able to enter the values in the field "GovTech" "Software Developer" "65656565" "test@co.com"
    When user clicks on checkbox for the field Same as registered address in Company Profile
	And user clicks for the field of same as main contact person
	When user clicks on save button
	When user navigates to "Proposal" screen
    Then user verifies the text "SUBMIT YOUR PROPOSAL"
    When user enter mandatory fields and click next in proposal screen
     | GovTech Auto Challenge	| 09 Oct 2019 | 10 Oct 2019 | GoveTech Project Description | Market Entry | Algeria |
    When user clicks on save button
    When user navigates to "Business Impact" screen
    Then user verifies the text "EXPLAIN THE BUSINESS IMPACT"
    When user enter mandatory fields and click next button in Business Impact screen
     | 09 Oct 2019 | 50.00 | 50.00 | GovTech Projections | GovTech Non Tangible Benefits |
    Then user verifies the text "PROVIDE DETAILS OF COSTS"
    When user enter mandatory fields and click next button in Cost screen
      | GovTech Vendor | Test.jpg | 500 |
    Then user verifies the text "DECLARE & ACKNOWLEDGE TERMS"
    
    
    
    
 @FS_AC1
 Scenario: Verify that user should able to enter all the mandatory fields and navigate to read only summary page   
 	When user enter mandatory fields and click review button in Declare and Acknowledge screen
 	Then user should verifies the text "Review Your Application" in read only summary page
  	And user should able to logged out successfully
 	And close browser 
 	
  
	
 
  @FS_AC2
 Scenario: Verify that user should able to enter all the mandatory fields and navigate to read only summary page
 	Then user should verify the error message "Select an option" for the missing field 
 	And user should able to logged out successfully
 	And close browser  
 
    
   
 @FS_AC3
 Scenario Outline: User should verifies read-only summary page should correctly contain all the details previously filled in each form section.  
 	When user enter mandatory fields and click review button in Declare and Acknowledge screen
 	When user navigates to "Eligibility" screen
    Then user should verifies the submitted data in Eligibility section
      |Yes|Yes|Yes|Yes|
    When user navigates to "Contact Details" screen
    And user should verifies the submitted data in Contact Details section "<Name>" "<Job_Title>" "<Contact_NO>" "<Email>"
    When user navigates to "Proposal" screen
    Then user should verifies the submitted data in Proposal screen
      | GovTech Auto Challenge | 09 Oct 2019 | 10 Oct 2019 | GoveTech Project Description | Market Entry | Algeria |
    When user navigates to "Business Impact" screen  
    Then user should verifies the submitted data in Business Impact screen
      | 09 Oct 2019 | 50.00 | 50.00 | GovTech Projections | GovTech Non Tangible Benefits |
    When user navigates to "Cost" screen 
    Then user should verifies the submitted data in Costs screen
      | GovTech Vendor | Test.jpg | SGD 500.00 |  
    When user navigates to "Declare & Review" screen 
 	And user should verifies the submitted data in Declare and review screen
      |No|No|No|No|No|No|No|Yes|
 	And user should able to logged out successfully
 	And close browser 
   
    
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|Name	|Job_Title			|Contact_NO	|Email			|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|GovTech|Software Developer	|65656565	|test@co.com	|	
    
 
 @FS_AC4
 Scenario: Verify that user should able to enter all the mandatory fields and navigate to read only summary page   
    When user enter mandatory fields and click review button in Declare and Acknowledge screen
    And user navigates to "Declare & Review" screen 
 	Then user should verifies the submitted data in Declare and review screen
      |No|No|No|No|No|No|No|Yes|
 	And user should able to logged out successfully
 	And close browser 

    

 @FS_AC5
 Scenario: Verify that user should able to submit the application successfully  
 	When user enter mandatory fields and click review button in Declare and Acknowledge screen 
    And user navigates to "Declare & Review" screen 
 	Then user should verifies the submitted data in Declare and review screen
      |No|No|No|No|No|No|No|Yes|      
    And user should able to submit My Grant Application
    Then user should verify the success message contain "Ref ID:" and "Enterprise Singapore"
  	And user should able to logged out successfully
 	And close browser 
      
    
 
 
 @FS_AC6
 Scenario: Verify that user should able to see the submitted application is displayed under processing tab  
 	When user enter mandatory fields and click review button in Declare and Acknowledge screen 
    And user navigates to "Declare & Review" screen 
 	Then user should verifies the submitted data in Declare and review screen
      |No|No|No|No|No|No|No|Yes|      
    And user should able to submit My Grant Application
    Then user should verify the success message contain "Ref ID:" and "Enterprise Singapore"
    When user clicks on "My Grants" in Main menu and verifies the submitted application is displayed
   	And user should able to logged out successfully
 	And close browser 

	
     
