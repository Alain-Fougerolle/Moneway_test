-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 20 mars 2020 à 13:28
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test-moneway-users`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `codePostal` int(11) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `rue` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `id_Transaction` text NOT NULL,
  `lieux_Transaction` text NOT NULL,
  `montant_Transaction` text NOT NULL,
  `date_Transaction` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `prenom`, `nom`, `codePostal`, `ville`, `rue`, `email`, `tel`, `id_Transaction`, `lieux_Transaction`, `montant_Transaction`, `date_Transaction`) VALUES
(1, 'alain', 'fougerolle', 25120, 'maiche', '6 rue de l\'helvétie', 'alainfougerolle@gmail.Com', '0608557261', '0,1,2,3,4,5,6', 'Montbéliard,Belfort,Besançon,Maîche,Laire,Raynans,Tavey', '40,75,90,54,67,82,23', '10/05/2019,15/05/2019,10/06/2019,23/07/2019,19/09/2019,30/11/2019,10/12/2019'),
(2, 'Tom', 'Martin', 25250, 'Montbéliard', '10 rue de belfort', 'totom@hotmail.fr', '0777856590', '0,1,2,3,4,5,6,7,8', 'Lyon,Lyon,Mulouse,Lyon,Marseille,Grasse,Orléans,Troie,Lyon', '455,67,423,45,56,766,34,23,30', '10/04/2019,15/05/2019,20/05/2019,10/06/2019,10/08/2019,19/09/2019,10/12/2019,10/01/2020,10/03/2020'),
(3, 'Alex', 'Richardo', 38250, 'Montpelier', '15 grand rue', 'Richard@gmail.fr', '0605040299', '0,1,2,3,4,5,6,7', 'Beaucourt,Delle,Saint-Suzanne,Merou,Moval,Héricourt,Héricourt,Hérimoncourt', '56,800,10,15,49,30,25,70', '20/01/2018,20/02/2018,25/03/2018,20/06/2018,30/07/2018,01/08/2018,03/08/2018,22/11/2018'),
(4, 'Laura', 'Vangrevenynghe', 78552, 'Lille', '19 rue de l\'alouette', 'lolo@gmail.com', '0745125456', '', '', '', ''),
(5, 'Phillipe', 'Menetrier', 65321, 'Orléans', '10 grande rue', 'phiphi@hotmail.fr', '0666564585', '', '', '', ''),
(6, 'Benoit', 'Legros', 75200, 'Paris', '15 rue charle de gaule', 'benoit@hotmail.Fr', '0755556585', '0,1,2,3,4,5,6,7,8,9', 'Troie,Calais,Orléans,Dunkerque,Bordeaux,Mathay,Paris,Paris,Paris,Dung', '80,95,54,12,14,45,74,98,76,15', '12/12/2017,12/01/2018,22/02/2018,23/02/2018,03/03/2018,04/03/2018,06/04/2018,16/04/2018,20/04/2018,25/04/2018'),
(7, 'Catherine', 'Pitre', 25500, 'Besancon', '7 rue de l\'alouette', 'cathy@gmail.com', '0608547895', '', '', '', ''),
(8, 'Patrick', 'Sébastien', 85500, 'Marseille', '19 rue du port', 'seb@laposte.fr', '0665455254', '', '', '', ''),
(9, 'Jean-Patrick', 'Lepetit', 78500, 'Bordeaux', '56 rue des champs', 'patou@gmail.com', '0655452515', '0,1,2,3', 'Dunkerque,Dunkerque,Lille,Lille', '450,340,800,120', '04/04/2019,05/04/2019,14/05/2019,07/06/2019');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
