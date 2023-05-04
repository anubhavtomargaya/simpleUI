

def get_raw_data(path):
    pass
    # sample data to work with while creating this

UI = """Build a react ~flask~ app which has one home page, it has button to:
            1. add new data: 
                i. take input for event- description,category,amt,date etc in a form and write to our csv
                ii. show popup with the assigned pocket
                iii. assign it to the pocket for which the category/event is.
                iv. take care of shared expenses, intelligently decide.

            2. refresh data:
                i. read the csv,process each row and store the {utctime-wkday-upiid-amt:category} combination in a dictionary
                ii.populate the suggested/predicted category in `suggested category` column based on the information 
                collated from historic data
           
            3.view data: to show data category wise,(a dashboard service).
                i.show day wise expenses in a bar graph
                ii. show category wise expense in a pie chart
                iii. remaining amt in each pocket in a stacked bar chart
           
            4. Create pockets: create a pocket which has parameters: {name:'',rules:{},limit:_,remainingBudget:$func}
           
            5. View Pocket: shows the data from that pocket.
                query the main table for all the events with this pocket | query the main table for the rule
                i.e. `for this pocket which categories are assigned (a dashboard service with scope limited to this dataset)

            6. View/Set Pocket rules: store the metadata for each pocket in a dictionary. 
                i. View all the pockets in a list.
                ii. View rules of one pocket and edit them by configuring {categories:[],wkday:'',amtrange:[]}

            
    """

