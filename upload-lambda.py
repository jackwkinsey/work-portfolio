import json
import boto3
import io
import zipfile
import mimetypes


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic(
        'arn:aws:sns:us-east-2:144055463112:deploy_portfolio_topic')

    try:
        s3 = boto3.resource('s3')
        build_bucket = s3.Bucket('codebuild.jackwkinsey.com')
        portfolio_bucket = s3.Bucket('www.jackwkinsey.com')
        build_zip = io.BytesIO()

        # Download build.zip file
        print('Downloading build.zip...')
        build_bucket.download_fileobj('build.zip', build_zip)
        print('FINISHED!')

        # Upload files from zip archive
        print('Uploading files from build.zip to portfolio bucket...')
        with zipfile.ZipFile(build_zip) as myzip:
            for name in myzip.namelist():
                print('Uploading ' + name)
                obj = myzip.open(name)
                portfolio_bucket.upload_fileobj(
                    obj, name, ExtraArgs={'ContentType': mimetypes.guess_type(name)[0]})
                portfolio_bucket.Object(name).Acl().put(ACL='public-read')
        print('FINISHED!')

        topic.publish(Subject='[SUCCESS] Portfolio Deployed',
                      Message='Portfolio deployed successfully!')
        return {
            'statusCode': 200,
            'body': json.dumps('Deployment complete!')
        }
    except:
        topic.publish(Subject='[FAIL] Portfolio Not Deployed',
                      Message='Portfolio was not deployed.')
        raise
