
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

    return control
    
