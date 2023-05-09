pipeline {
    agent any
    options { timeout(time: 40, unit: 'MINUTES') }
    environment {
        BUCKET_NAME = credentials('bucket.name')
        CLOUDFRONT_DIST_ID = credentials('cf.id')
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
        stage("Clean for app-list") {
            when { branch 'app-list' }
            steps {
                dir("${env.WORKSPACE}/app-list") {
                    nodejs('nodejs-16.15.1') {
                        sh 'rm -rf node_modules'
                        sh 'yarn'
                    }
                }
            }
        }
        stage("Clean for app-detail") {
            when { branch 'react-app-detail' }
            steps {
                dir("${env.WORKSPACE}/react-app-detail") {
                    nodejs('nodejs-16.15.1') {
                        sh 'rm -rf node_modules'
                        sh 'yarn'
                    }
                }
            }
        }
        stage("Clean for app-about") {
            when { branch 'angular-app-about' }
            steps {
                dir("${env.WORKSPACE}/angular-app-about") {
                    nodejs('nodejs-16.15.1') {
                        sh 'rm -rf node_modules'
                        sh 'yarn'
                    }
                }
            }
        }
        stage("Clean for common-components") {
            when { branch 'common-components' }
            steps {
                dir("${env.WORKSPACE}/common-components") {
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
        stage("Build for app-list") {
            when { branch 'app-list' }
            steps {
                dir("${env.WORKSPACE}/app-list") {
                    nodejs('nodejs-16.15.1') {
                        sh 'yarn build'
                    }
                }
            }
        }
        stage("Build for app-detail") {
            when { branch 'react-app-detail' }
            steps {
                dir("${env.WORKSPACE}/react-app-detail") {
                    nodejs('nodejs-16.15.1') {
                        sh 'yarn build'
                    }
                }
            }
        }
        stage("Build for app-about") {
            when { branch 'angular-app-about' }
            steps {
                dir("${env.WORKSPACE}/angular-app-about") {
                    nodejs('nodejs-16.15.1') {
                        sh 'yarn build'
                    }
                }
            }
        }
        stage("Build for common-components") {
            when { branch 'common-components' }
            steps {
                dir("${env.WORKSPACE}/common-components") {
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
                    aws s3 sync ${env.WORKSPACE}/dist/host s3://${env.BUCKET_NAME}/host/ --delete
                    aws cloudfront create-invalidation --distribution-id ${env.CLOUDFRONT_DIST_ID} --paths '/host' --output text
                    """
                }
            }
        }
        stage("Deploy app-list") {
            when { branch 'app-list' }
            steps {
                withAWS(credentials: 'aws-access', region: 'ap-northeast-2') {
                    sh """
                    aws s3 sync ${env.WORKSPACE}/dist/app-list s3://${env.BUCKET_NAME}/app-list/ --delete
                    aws cloudfront create-invalidation --distribution-id ${env.CLOUDFRONT_DIST_ID} --paths '/app-list' --output text
                    """
                }
            }
        }
        stage("Deploy app-detail") {
            when { branch 'react-app-detail' }
            steps {
                withAWS(credentials: 'aws-access', region: 'ap-northeast-2') {
                    sh """
                    aws s3 sync ${env.WORKSPACE}/dist/react-app-detail s3://${env.BUCKET_NAME}/react-app-detail/ --delete
                    aws cloudfront create-invalidation --distribution-id ${env.CLOUDFRONT_DIST_ID} --paths '/react-app-detail' --output text
                    """
                }
            }
        }
        stage("Deploy app-about") {
            when { branch 'angular-app-about' }
            steps {
                withAWS(credentials: 'aws-access', region: 'ap-northeast-2') {
                    sh """
                    aws s3 sync ${env.WORKSPACE}/dist/angular-app-about s3://${env.BUCKET_NAME}/angular-app-about/ --delete
                    aws cloudfront create-invalidation --distribution-id ${env.CLOUDFRONT_DIST_ID} --paths '/angular-app-about' --output text
                    """
                }
            }
        }
        stage("Deploy common-components") {
            when { branch 'common-components' }
            steps {
                withAWS(credentials: 'aws-access', region: 'ap-northeast-2') {
                    sh """
                    aws s3 sync ${env.WORKSPACE}/dist/common-components s3://${env.BUCKET_NAME}/common-components/ --delete
                    aws cloudfront create-invalidation --distribution-id ${env.CLOUDFRONT_DIST_ID} --paths '/common-components' --output text
                    """
                }
            }
        }
    }
}