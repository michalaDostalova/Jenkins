pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.37.0-focal' // Use the official Playwright Docker image
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building TypeScript project...'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test'
            }
        }
        stage('Playwright Tests') {
            steps {
                echo 'Running Playwright tests...'
                sh 'npx playwright test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Replace the following with your deployment commands
                sh 'npm run deploy'
            }
        }
    }
}