
import json
import mechanize
import requests


def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
    }


def lambda_handler(event, context):
    '''Demonstrates a simple HTTP endpoint using API Gateway. You have full
    access to the request and response payload, including headers and
    status code.

    To scan a DynamoDB table, make a GET request with the TableName as a
    query string parameter. To put, update, or delete an item, make a POST,
    PUT, or DELETE request respectively, passing in the payload to the
    DynamoDB API as a JSON body.
    '''
    print "Received event: " + json.dumps(event, indent=2)


    operation = event['httpMethod']
    if operation == 'GET':
        payload = event['queryStringParameters']
        return respond(None, getFCQ(payload))
    else:
        return respond(ValueError('Unsupported method "{}"'.format(operation)))

def getFCQ(query):
    br = mechanize.Browser()
    br.set_handle_robots(False)   # ignore robots
    br.set_handle_refresh(False)  # can sometimes hang without this
    br.addheaders = [('User-agent', 'Firefox')]

    fcqdpt = 'BD : Entire Campus ## BD'

        #the url for the fcq site
    url = 'https://fcq.colorado.edu/UCBdata.htm'

    #we open the url
    response = br.open(url)

    control = br.select_form("frmFCQ")
    
    #go through all of the form options so we can change them
    for control in br.form.controls:
        #this will show us all of our default value for the fields. See page options for the output of the FCQ page as of 1/3/15
        #print "DEFAULT: type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])

        if (control.name == 'fcqdpt'):
            br[control.name] = [fcqdpt]
            print "CHANGE fcqdpt type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])

        elif (control.name == 'ftrm'):
            br[control.name] = ['7'] # Fall
            print "CHANGE first term type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])

        elif (control.name == 'ltrm'):
            br[control.name] = ['1'] # Spring
            print "CHANGE last term type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])

        elif (control.name == 'fileFrmt'):
            br[control.name] = ['XLS']
            print "CHANGE fileFrmt type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])

        elif (control.name == 'fyr'):
            br[control.name] = ['2007']
            print "CHANGE first year type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])

        elif (control.name == 'lyr'):
            br[control.name] = ['2016']
            print "CHANGE last year type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])
            
        elif (control.name == 'iname' and 'instructor' in query.keys()):
            br[control.name] = query['instructor']
            print "CHANGE instructor type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])
            
        elif (control.name == 'crse' and 'courseCode' in query.keys()):
            br[control.name] = query['courseCode']
            print "CHANGE courseCode type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])
            
        elif (control.name == 'subj' and 'courseDept' in query.keys()):
            br[control.name] = query['courseDept']
            print "CHANGE courseDept type=%s, name=%s value=%s" % (control.type, control.name, br[control.name])    

    response = br.submit()

    if 'Currently, Excel files with FCQ results are limited to 50,000 rows.' in response.read():
        print('CAUTION REQUEST HAS MORE THAN 50,000 LINES!')

    for link in br.links():
        if (link.text == 'Click here'):
            print(link.url)
            original = link.url
            #need to split because output link is: javascript:popup('/fcqtemp/BD010395426.xls','BD010395426','750','550','yes','yes')
            split = original.replace("\'","").split(',')
            #get this BD010395426
            proper_link = "https://fcq.colorado.edu/fcqtemp/{xcel}.xls".format(xcel=split[1])
            print proper_link
    
    return proper_link
    
