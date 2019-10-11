@Contact_Detail
Feature: Contact Detail Section

  #--------------------------------  Scenario Flow 1 --------------------------------------------------#
  Background: 
    Given Launching the browser

  @CD_AC1
  Scenario Outline: Verify that user should able to view the subsection of the Main Contact Person
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS"
    And user should verifies the following fields Name,Job Title,Contact No,Email,Alternate Contact Person's Email,Mailing Address are available in Contact Detail page
  	And user should able to logged out successfully
 	And close browser      
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|
    
  
   @CD_AC2
  Scenario Outline: Verify that user should able to validate the auto populate values Blk/Hse No and Street details
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS"
	When user should able to enter the postal code "460096"in mailing address
	Then user verifies Blk/Hse No "96" and Street "BEDOK NORTH AVENUE 4" should autopopulate
  	And user should able to logged out successfully
 	And close browser
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|
  
  
  @CD_AC3
  Scenario Outline: Verify that user should able to validate the auto populate values when click checkbox ‘Same as registered address in Company Profile’
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS"
    When user clicks on checkbox for the field Same as registered address in Company Profile
    Then user validates the postal code "453123" , Level "03" , and Unit "19"
	And user verifies Blk/Hse No "45" and Street "CHOA CHU KANG CENTRAL" should autopopulate
  	And user should able to logged out successfully
 	And close browser
	
    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|
    
  @CD_AC4
  Scenario Outline: Verify that user should able to view the subsection of the Letter of Office Addressee
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS"
    And user should verfies the following fields Name, Job Title, Email
  	And user should able to logged out successfully
 	And close browser

    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|
    
    
    
 @CD_AC5
  Scenario Outline: Verify that user should able to validate the auto populate values when click checkbox 'Same as main contact person'
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS"
	When user should able to enter the values in the field "<Name>" "<Job_Title>" "<Contact_NO>" "<Email>"
	And user clicks for the field of same as main contact person
	Then verifies the value populate in subsection of the Letter of office Addrssee "<Name>" "<Job_Title>" "<Email>"
  	And user should able to logged out successfully
 	And close browser

    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|Name	|Job_Title			|Contact_NO	|Email			|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|GovTech|Software Developer	|65656565	|test@co.com	|	
    

 @CD_AC6
  Scenario Outline: Verify that user should able to validate the saved values after refresh the page
    Given User login with own "<UserName>" "<UserFullName>" "<UserID>" "<UserRole>"
    When user creates a new Grant
    And user clicks on Proceed button in My Grant Actions screen	
    When user navigates to "Contact Details" screen
    Then user verifies the text "PROVIDE YOUR CONTACT DETAILS"
	When user should able to enter the values in the field "<Name>" "<Job_Title>" "<Contact_NO>" "<Email>"
	And user clicks for the field of same as main contact person
	Then verifies the value populate in subsection of the Letter of office Addrssee "<Name>" "<Job_Title>" "<Email>"
	When user clicks on save button
    And user refreshes the page
	Then verifies the value populate in subsection of the Letter of office Addrssee "<Name>" "<Job_Title>" "<Email>"
  	And user should able to logged out successfully
 	And close browser	

    Examples:
    |UserName	|UserFullName	|UserID		|UserRole	|Name	|Job_Title			|Contact_NO	|Email			|
    |G3377467U	|Testing		|T12LL1368D	|Acceptor	|GovTech|Software Developer	|65656565	|test@co.com	|	
    
    
    
    
    