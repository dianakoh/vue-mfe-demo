pipeline {
    agent any
    options { timeout(time: 40, unit: 'MINUTES') }
    environment {
        HOST_BUCKET_NAME = credentials('host.bucket.name')
        CLOUDFRONT_DOMAIN = credentials('cf.id')
    }
    stages {
        stage("Clean for host") {
            when { branch 'host' }
            steps {
                dir("${env.WORKSPACE}/host") {
                    nodejs('nodejs-16.15.1') {
                        sh 'rm -rf node_modules'
                        sh 'yarn'
                    }
                }
            }
        }
        stage("Build for host") {
            when { branch 'host' }
            steps {
                dir("${env.WORKSPACE}/host") {
                    nodejs('nodejs-16.15.1') {
                        sh 'yarn build'
                    }
                }
            }
        }
        stage("Deploy host") {
            when { branch 'host' }
            steps {
                withAWS(credentials: 'aws-access', region: 'ap-northeast-2') {
                    sh """
                    aws s3 sync ${env.WORKSPACE}/dist/host s3://${env.HOST_BUCKET_NAME}/ --delete
                    aws cloudfront create-invalidation --distribution-id ${env.CLOUDFRONT_DOMAIN} --paths '/*' --output text
                    """
                }
            }
        }
    }
}