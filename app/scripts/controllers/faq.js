'use strict';

/**
 * @ngdoc function
 * @name grantunedApp.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the grantunedApp
 */
angular.module('grantunedApp')
  .controller('FaqCtrl', function ($scope, headerService) {
    $scope.items = [
      {
        'question': 'Le produit est-il vendu aux particuliers?',
        'answer': 'Non, actuellement, le système EcoTuned offert uniquement aux gestionnaires de flottes de véhicules. Cependant, nous prévoyons ouvrir notre marché aux consommateurs d’ici les 2 prochaines années. Si vous êtres intéressé par notre produit et êtres un particulier, nous vous invitons à nous contacter pour nous signifier votre intérêt.'
      },
      {
        'question': 'La technologie peut-elle s’adapter à toute marque de camionnettes?',
        'answer': 'Le système EcoTuned est conçu pour être installé et être réutilisé sur plusieurs modèles de camionnettes et fourgonnettes sur le marché. Contactez-nous pour connaitre l’admissibilité votre véhicule.'
      },
      {
        'question': 'La technologie peut-elle s’adapter aux véhicules utilitaires sport (VUS)?',
        'answer': 'Non, présentement, nous nous concentrons sur les camionnettes et les fourgonnettes. Nous espérons offrir prochainement l’installation du système EcoTuned sur les VUS, mais aucune date n’est encore prévue.'
      },
      {
        'question': 'La technologie est-elle garantie?',
        'answer': 'Oui, le système EcoTuned vient avec une garantie de 3 ans / 90 0000 km couvrant le système motopropulseur électrique ainsi que les liaisons aux sols du véhicule tels que les freins et la suspension.'
      },
      {
        'question': 'Le système EcoTuned est-il éligible aux rabais à l\'achat d\'un véhicule électrique offerts par le gouvernement?',
        'answer': 'Non, présentement, le programme d’aide à l’achat d’un véhicule électrique n’inclut pas la conversion électrique. Nous travaillons actuellement avec le gouvernement à élargir ce programme prochainement.'
      },
      {
        'question': 'La technologie est-elle homologuée pour le réseau routier?',
        'answer': 'Oui, le système EcoTuned répond à toutes les normes de sécurité en matière automobile. Elle est homologuée pour le réseau routier.'
      },
      {
        'question': 'Où puis-je obtenir, installer et entretenir le système EcoTuned?',
        'answer': 'Le système EcoTuned ainsi que le service d’installation et d’entretien peuvent être accessibles via un réseau de techniciens et de garages partenaires. Contactez-nous pour connaitre le garage agréé de votre région.'
      }
    ];
  });
