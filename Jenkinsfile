pipeline {
  agent any

  stages {
    stage('Git Clone') {
      steps {
          checkout scm
      }
    }

    stage('Build image') {
      steps {
        container('docker') {

          sh '''
          env && docker build -t ${FRONTEND_IMAGE_NAME}:${GIT_COMMIT} .
          '''
        }
      }
    }

    stage('Push image') {
      steps {
        container('docker') {
          sh '''
          docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}
          docker push ${FRONTEND_IMAGE_NAME}:${GIT_COMMIT}
          '''
        }
      }
    }
  }
}
