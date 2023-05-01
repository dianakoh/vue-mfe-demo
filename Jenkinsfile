pipeline {
    agent any
    options { timeout(time: 40, unit: 'MINUTES') }
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
    }
}