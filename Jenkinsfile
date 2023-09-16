pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID     = credentials('jenkins-user')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-user')
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                checkout scm
            }
        }
        stage('Deploy app') {
            steps {
                script {
                    def workspace = pwd()  // Get the current workspace directory
                    echo "Current workspace: ${workspace}"

                    // Change to the directory where Terraform configuration files are located
                    dir("${workspace}/asmita") {
                        // change directory to asmita
                        sh 'cd asmita'
                        
                    
                            echo 'checking deployment directory...'
                            
                            // Deploy app to s3 bucket
                            //sh 'aws s3 sync ./static-files s3://your-s3-bucket/'
                            sh 'aws s3 ls'
                            sh 'ls -lhi'
                        }
                    }
                }
            }
        }
    }
}
