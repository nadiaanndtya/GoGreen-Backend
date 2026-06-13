-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2026 at 03:09 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bismillah`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `thumbnail`, `category_id`, `slug`, `created_at`, `updated_at`) VALUES
(4, 'Tips Mengurangi Sampah PLastik', '<p>Mengurangi sampah plastik dapat dilakukan dengan menerapkan prinsip 3R (Reduce, Reuse, Recycle). Langkah praktisnya meliputi membawa tas belanja kain, menggunakan botol minum (tumbler) dan wadah makan reusable, menghindari sedotan plastik, serta memilih produk dengan kemasan minimal. \r\n\r\nBerikut adalah cara efektif mengurangi sampah plastik di kehidupan sehari-hari:</p><p>\r\n<strong>1. Bawa Tas Belanja Sendiri: </strong>Selalu membawa tas kain (tote bag) saat belanja untuk menghindari kantong plastik sekali pakai.</p><p>\r\n<strong>2. Gunakan Botol &amp; Wadah Reusable: </strong>Gunakan botol minum, cangkir kopi, dan wadah makan stainless steel atau kaca yang bisa dicuci dan digunakan kembali.</p><p>\r\n<strong>3. Hindari Sedotan Plastik: </strong>Tolak sedotan plastik atau gunakan alternatif seperti sedotan bambu atau stainless steel.</p><p>\r\n<strong>4. Pilih Produk Minim Kemasan:</strong> Beli produk curah atau kemasan besar untuk mengurangi sampah kemasan kecil-kecilan.</p><p>\r\n<strong>5. Hindari Alat Makan Sekali Pakai:</strong> Gunakan sendok, garpu, dan sumpit sendiri saat membeli makanan bawa pulang.</p><p>\r\n<strong>6. Daur Ulang dan Pilah Sampah: </strong>Pisahkan sampah organik dan anorganik di rumah agar sampah plastik mudah didaur ulang.</p><p>\r\n<strong>7. Gunakan Alternatif Ramah Lingkungan:</strong> Gunakan sabun batang, sikat gigi bambu, atau kemasan berbahan rumput laut yang mudah terurai. \r\n\r\nDengan konsisten melakukan langkah-langkah ini, kita dapat mengurangi timbunan sampah plastik yang mencemari lingkungan.</p>', '1775444009376-ChatGPT Image Mar 29, 2026, 11_42_18 AM-Photoroom 2.png', 1, 'tips-mengurangi-sampah-plastik', '2026-04-06 02:53:29', '2026-04-07 11:49:02'),
(5, 'Cara Sederhana Mendaur Ulang Sampah', '<p>Cara sederhana mendaur ulang sampah di rumah dimulai dengan memilah sampah organik dan anorganik. Olah sisa makanan menjadi kompos, gunakan kembali kemasan plastik/kaca (reuse), buat ecobrick dari plastik lunak, serta kumpulkan kertas dan logam untuk disalurkan ke bank sampah. Langkah ini mengurangi tumpukan sampah secara signifikan. </p><p><br></p><p>\r\n\r\nBerikut adalah langkah-langkah praktis daur ulang di rumah:</p><p>\r\n<strong>1. Pemilahan Dasar: </strong>Pisahkan sampah organik (sisa makanan/daun) dan anorganik (plastik, kertas, logam, kaca).</p><p>\r\n<strong>2. Komposting (Organik):</strong> Sisa sayur dan buah bisa diolah menjadi kompos dengan mendiamkannya dalam wadah tertutup, diaduk seminggu sekali selama 2-3 bulan.</p><p>\r\n<strong>3. Ecobrick (Plastik Lunak): </strong>Masukkan sampah plastik bersih ke dalam botol plastik bekas hingga padat. Ecobrick dapat disusun menjadi kursi atau meja.</p><p>\r\n<strong>4. Reuse (Gunakan Kembali):</strong> Gunakan botol kaca untuk penyimpanan, kaleng bekas untuk pot tanaman, atau kerajinan tangan dari barang bekas.</p><p>\r\n<strong>5. Bersihkan Sampah Anorganik:</strong> Cuci kemasan plastik, kaleng, atau botol kotor sebelum disimpan/dikumpulkan agar tidak mencemari bahan lainnya.</p><p>\r\n<strong>6. Bank Sampah/Drop Box: </strong>Salurkan sampah anorganik yang terpilah (kertas, plastik, logam) ke bank sampah lokal atau drop box daur ulang. \r\n\r\nContoh kreativitas daur ulang:\r\n1. Mengubah baju bekas menjadi tas belanja (tote bag).\r\n2. Membuat hiasan dinding dari sumpit atau tusuk sate bekas.\r\n3. Menjadikan kemasan saset kopi sebagai kerajinan tas plastik.</p>', '1775447823107-image (2) 1.png', 3, 'cara-sderhana-mendaur-ulang-sampah', '2026-04-06 03:57:03', '2026-04-07 11:48:53'),
(6, 'Panduan Memilah Sampah Dengan Benar', '<p>Memilah sampah dengan benar adalah langkah penting untuk menjaga kebersihan, lingkungan dan mendukung proses daur ulang. Dengan memilah sampah dari rumah, kita dapat mengurangi jumlah sampah di tempat pembuangan akhir dan membantu mendaur ulang material yang bisa diproses kembali. Berikut ini adalah panduan untuk memilah sampah dengan benar guna menjaga lingkungan tetap bersih dan sehat.\r\n\r\nMemilah sampah dengan benar dimulai dengan&nbsp;memisahkan sampah organik (sisa makanan/daun) dan anorganik (plastik/kertas/kaca) di rumah, lalu bersihkan sampah anorganik sebelum dibuang. Gunakan wadah terpisah, olah organik menjadi kompos, dan daur ulang anorganik untuk mengurangi limbah ke TPA.\r\n\r\n<strong>1. Pemisahan Berdasarkan Jenis</strong>\r\nSampah perlu dipisahkan menjadi tiga kategori utama agar mudah dikelola. Sampah organik (hijau) seperti sisa makanan dan daun mudah terurai. Sampah anorganik (biru) seperti plastik dan kaca bisa didaur ulang. Sedangkan sampah B3 (merah) seperti baterai dan masker berbahaya sehingga harus dipisahkan khusus.\r\n\r\n<strong>2. Persiapan Sampah Anorganik</strong>\r\nSampah anorganik tidak cukup hanya dipisahkan, tetapi juga perlu dipersiapkan dengan benar sebelum didaur ulang. Kemasan plastik, kaleng, atau botol harus dibersihkan dari sisa makanan atau cairan agar tidak menimbulkan bau, jamur, atau kontaminasi yang bisa mengganggu proses daur ulang. Selain itu, sampah perlu dikeringkan supaya tidak lembap, karena kondisi basah dapat menurunkan kualitas material daur ulang dan membuatnya lebih sulit diproses.\r\n\r\n<strong>3. Pengelolaan Mandiri </strong>\r\nSampah organik bisa diolah menjadi kompos untuk pupuk. Sementara itu, sampah anorganik dapat dikumpulkan dan disetor ke bank sampah. Cara ini membantu mengurangi sampah sekaligus memberi nilai ekonomi.\r\n\r\n<strong>4. Tindakan Hindari</strong>\r\nJangan mencampur kertas dengan sampah basah atau berminyak karena sulit didaur ulang. Selain itu, hindari membuang sampah B3 ke tempat sampah umum karena berbahaya bagi lingkungan dan kesehatan.\r\n\r\n<strong>5. Kurangi Reduce</strong>\r\nMengurangi produksi sampah adalah langkah paling efektif dibandingkan sekadar mengelolanya. Membawa tas belanja sendiri, menggunakan wadah pakai ulang, dan menghindari produk sekali pakai adalah contoh tindakan sederhana yang berdampak besar. Intinya, semakin sedikit sampah yang dihasilkan, semakin ringan beban pengelolaan yang harus dilakukan, baik oleh individu maupun sistem lingkungan \r\nsecara keseluruhan.</p>', '1775447906347-WhatsApp_Image_2026-03-30_at_10.41.26-removebg-preview.png', 2, 'panduan-memilah-sampah-dengan-benar', '2026-04-06 03:58:26', '2026-04-15 07:44:43');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Pengurangan Sampah'),
(2, 'Pemilahan Sampah'),
(3, 'Daur Ulang');

-- --------------------------------------------------------

--
-- Table structure for table `dukungan_laporan`
--

CREATE TABLE `dukungan_laporan` (
  `id_dukungan` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_laporan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dukungan_laporan`
--

INSERT INTO `dukungan_laporan` (`id_dukungan`, `id_user`, `id_laporan`) VALUES
(49, 13, 35),
(54, 11, 36),
(53, 13, 36),
(50, 16, 36),
(63, 11, 37),
(51, 16, 37),
(77, 11, 38),
(52, 13, 39),
(78, 11, 40),
(93, 11, 60),
(82, 13, 60),
(58, 23, 60),
(79, 11, 63),
(81, 13, 63),
(80, 15, 63);

-- --------------------------------------------------------

--
-- Table structure for table `laporan`
--

CREATE TABLE `laporan` (
  `id_laporan` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `foto_selesai` varchar(255) DEFAULT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `status` enum('terkirim','proses','selesai') DEFAULT 'terkirim',
  `tanggal_laporan` datetime DEFAULT NULL,
  `tanggal_update` datetime DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `laporan`
--

INSERT INTO `laporan` (`id_laporan`, `id_user`, `judul`, `deskripsi`, `foto`, `foto_selesai`, `lokasi`, `kecamatan`, `status`, `tanggal_laporan`, `tanggal_update`, `latitude`, `longitude`) VALUES
(35, 11, 'Tempat Sampah di Taman Kota Belum diangkut', 'Mohon diangkut ya tolong kerja samanya, apalagi tamannya selalu rame pengunjung', '1774500221427-Kondisi-sampah-di-Taman-Amahami.jpg', '', 'Taman Mattirotasi', 'Bacukiki Barat', 'selesai', '2026-03-26 04:43:41', '2026-03-26 04:43:41', NULL, NULL),
(36, 13, 'Sampah Menumpuk Di Pinggir Jalan', 'Sudah sering Kejadian, Warga dihimbau untuk menjaga kebersihan mohon kerja samanya', '1774500360582-20130108Penumpukan-Sampah-080113-IES.jpg', '', 'Jl Mattirotasi', 'Bacukiki Barat', 'terkirim', '2026-03-26 04:46:00', '2026-03-26 04:46:00', NULL, NULL),
(37, 16, 'Sampah Menumpuk Di Pinggir Pantai', 'Tolong kalau berkunjung kepantai Sampahnya jangan dibuang sembarangan, sudah di sediakan tempat sampah', '1774500608398-sampah-kembalu-muncul-di-pesisir-loji_169.jpeg', '1774979092180-WhatsApp_Image_2026-03-30_at_10.41.26-removebg-preview.png', 'Pantai Lumpue', 'Bacukiki Barat', 'selesai', '2026-03-26 04:50:08', '2026-03-31 17:44:52', NULL, NULL),
(38, 15, 'Tempat Sampah tidak diangkut ', 'sudah 5 hari dibiarkan seperti ini', '1774500740263-IMG-20250109-WA0013-700x400.jpg', '1774984027095-ChatGPT Image 28 Mar 2026, 00.20.45.png', 'Jl Lumpue', 'Bacukiki Barat', 'selesai', '2026-03-26 04:52:20', '2026-03-31 19:07:07', NULL, NULL),
(39, 13, 'Sampah Menyumbat Saluran Air', 'di mohon kerja samanya', '1774500822713-jorok-tumpukan-sampah-sumbat-saluran-air-di-bekasi-1_169.jpeg', '1777993952441-pngtree-dustbin-vector-illustration-with-flat-style-png-image_2332801.jpg', 'Jl Andi Makassau', 'Soreang', 'selesai', '2026-03-26 04:53:42', '2026-05-05 15:12:32', NULL, NULL),
(40, 11, 'Sampah tidak diangkut akibatnya diacak oleh hewan hewan', 'tolong diangkut sudah banyak hewan yang buat semakin berserakan', '1774508465168-istockphoto-1188345134-170667a.jpg', '', 'Jl Jambu', 'Bacukiki Barat', 'terkirim', '2026-03-26 07:01:05', '2026-05-06 11:12:54', NULL, NULL),
(60, 23, 'Gorong gorong tersumbat oleh Tempat Sampah umum yg terlambat diangkut ', 'TPS umum Penuh akibatnya sampahnya sampai berserakan di gorong', '1775958971133-gorongd.jpg', NULL, 'Jl Ambomatti', 'Ujung', 'terkirim', '2026-04-12 01:54:58', '2026-04-12 01:56:11', NULL, NULL),
(63, 13, 'Jadwal Pengangkutan Tidak Jelas ', 'Mobil sampah tidak datang sesuai jadwal, sudah seminggu tidak ada pengangkutan', '1777422392386-4d15f055-de55-489d-bfe5-d9ede02772db.png', NULL, 'Jl. Industri Kecil', 'Soreang', 'proses', '2026-04-29 00:26:32', '2026-04-29 00:30:41', NULL, NULL),
(76, 11, 'hai teman teman', 'b', '1778068715408-9d8327df-b2cf-40b1-b1ed-a58028feeb6a.webp', NULL, 'lapadde', 'Ujung', 'terkirim', '2026-05-06 11:57:50', '2026-05-06 11:58:35', NULL, NULL),
(78, 11, 'cobacoba', 'yy', '1778070994244-pngtree-dustbin-vector-illustration-with-flat-style-png-image_2332801.jpg', NULL, 'Jalan Pintu 2, Ujung, Pare-Pare, South Sulawesi, Sulawesi, 91121, Indonesia', 'Ujung', 'terkirim', '2026-05-06 12:34:34', '2026-05-06 12:36:34', -3.986546, 119.653313);

-- --------------------------------------------------------

--
-- Table structure for table `tempat_sampah`
--

CREATE TABLE `tempat_sampah` (
  `id_tps` int(11) NOT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `nama_tps` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tempat_sampah`
--

INSERT INTO `tempat_sampah` (`id_tps`, `lokasi`, `latitude`, `longitude`, `nama_tps`) VALUES
(1, 'Jl Balai Kota', -4.02892, 119.633, 'TPS Kampus ITH'),
(3, 'Jl. Lumpue', -4.01341, 119.653, 'TPS LUMPUE'),
(5, 'Jl Petta Unga', -4.0034, 119.627, 'TPS PASAR LAKESSI');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'warga',
  `no_hp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `nama`, `email`, `alamat`, `password`, `role`, `no_hp`) VALUES
(11, 'budi', 'budi@gmail.com', 'Jln Bau Massepe', '$2b$10$9ku67MYKkNQIR.s.BdHr8ubVnezguYjUmrbFw89HpGdaYBjqF4Ryu', 'warga', '0865654654'),
(12, 'cobacoba', 'coba@gmail.com', 'Jl Apa Saja', '$2b$10$7VIzj20sVtLkwvm4P4KrQeh1SZ0ULdnInu3z7tFg3GdADcYxKrvlG', 'warga', '0887675765'),
(13, 'Nadia Aninditiya', 'nadiaaninditiya@gmail.com', 'BTN PEPABRI', '$2b$10$yHkQP03MN2MttZsMfytsRuWeOtcUgwAgF5plZ5mt2JFjVNTGTSEhS', 'warga', '0987656779'),
(15, 'Sean Anthony', 'sean@gmail.com', 'jln apa saja', '$2b$10$7w2JX1aAC.Jx17SR/zUqGuGSzpokrdFmINiXDm3uG0rNEeRfnvL.6', 'warga', '098765432'),
(16, 'listyana', 'listy@gmail.com', 'Jln apa saja', '$2b$10$mq6d7sD0drEzcxUwA.jeDuhhOinLSwmwatDEtex.iyhlDr2T021KW', 'warga', '655456789'),
(20, 'Admin Dinas', 'admin@gmail.com', '', '$2b$10$q3XmfYtUsUaBk2thHOePwOaoyf47bFGULJYz166YpzyG6jpei0EeG', 'admin', ''),
(23, 'ulpi', 'ulpi@gmail.com', 'jl sembarang', '$2b$10$lrW2DquqMr/YcvVm2hmTo.AnaqvKWo/APnMIY4ZaTDbewZVoN1Ik.', 'warga', '098765434567'),
(24, 'luluk', 'luluk@gmail.com', 'jln balai kota', '$2b$10$oppUEy9HguEGZ/3Hy9aetuxMXajuM6gLogsJEVU0CJMWBKcrPUrrC', 'warga', '09876543456'),
(25, 'alya', 'alya@gmail.com', 'jln apa saja', '$2b$10$Vei5/EUkfg0F2fFuYzgqxebaKUkhIdo.10QMcYbrte6p/9RKSco7S', 'warga', '09876545678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `slug_2` (`slug`),
  ADD UNIQUE KEY `slug_3` (`slug`),
  ADD UNIQUE KEY `slug_4` (`slug`),
  ADD UNIQUE KEY `slug_5` (`slug`),
  ADD UNIQUE KEY `slug_6` (`slug`),
  ADD UNIQUE KEY `slug_7` (`slug`),
  ADD UNIQUE KEY `slug_8` (`slug`),
  ADD UNIQUE KEY `slug_9` (`slug`),
  ADD UNIQUE KEY `slug_10` (`slug`),
  ADD UNIQUE KEY `slug_11` (`slug`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dukungan_laporan`
--
ALTER TABLE `dukungan_laporan`
  ADD PRIMARY KEY (`id_dukungan`),
  ADD UNIQUE KEY `unique_user_laporan` (`id_laporan`,`id_user`),
  ADD UNIQUE KEY `dukungan_laporan_id_user_id_laporan` (`id_user`,`id_laporan`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_laporan` (`id_laporan`);

--
-- Indexes for table `laporan`
--
ALTER TABLE `laporan`
  ADD PRIMARY KEY (`id_laporan`),
  ADD KEY `fk_laporan_user` (`id_user`);

--
-- Indexes for table `tempat_sampah`
--
ALTER TABLE `tempat_sampah`
  ADD PRIMARY KEY (`id_tps`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `email_19` (`email`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `email_24` (`email`),
  ADD UNIQUE KEY `email_25` (`email`),
  ADD UNIQUE KEY `email_26` (`email`),
  ADD UNIQUE KEY `email_27` (`email`),
  ADD UNIQUE KEY `email_28` (`email`),
  ADD UNIQUE KEY `email_29` (`email`),
  ADD UNIQUE KEY `email_30` (`email`),
  ADD UNIQUE KEY `email_31` (`email`),
  ADD UNIQUE KEY `email_32` (`email`),
  ADD UNIQUE KEY `email_33` (`email`),
  ADD UNIQUE KEY `email_34` (`email`),
  ADD UNIQUE KEY `email_35` (`email`),
  ADD UNIQUE KEY `email_36` (`email`),
  ADD UNIQUE KEY `email_37` (`email`),
  ADD UNIQUE KEY `email_38` (`email`),
  ADD UNIQUE KEY `email_39` (`email`),
  ADD UNIQUE KEY `email_40` (`email`),
  ADD UNIQUE KEY `email_41` (`email`),
  ADD UNIQUE KEY `email_42` (`email`),
  ADD UNIQUE KEY `email_43` (`email`),
  ADD UNIQUE KEY `email_44` (`email`),
  ADD UNIQUE KEY `email_45` (`email`),
  ADD UNIQUE KEY `email_46` (`email`),
  ADD UNIQUE KEY `email_47` (`email`),
  ADD UNIQUE KEY `email_48` (`email`),
  ADD UNIQUE KEY `email_49` (`email`),
  ADD UNIQUE KEY `email_50` (`email`),
  ADD UNIQUE KEY `email_51` (`email`),
  ADD UNIQUE KEY `email_52` (`email`),
  ADD UNIQUE KEY `email_53` (`email`),
  ADD UNIQUE KEY `email_54` (`email`),
  ADD UNIQUE KEY `email_55` (`email`),
  ADD UNIQUE KEY `email_56` (`email`),
  ADD UNIQUE KEY `email_57` (`email`),
  ADD UNIQUE KEY `email_58` (`email`),
  ADD UNIQUE KEY `email_59` (`email`),
  ADD UNIQUE KEY `email_60` (`email`),
  ADD UNIQUE KEY `email_61` (`email`),
  ADD UNIQUE KEY `email_62` (`email`),
  ADD UNIQUE KEY `email_63` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `dukungan_laporan`
--
ALTER TABLE `dukungan_laporan`
  MODIFY `id_dukungan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `laporan`
--
ALTER TABLE `laporan`
  MODIFY `id_laporan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `tempat_sampah`
--
ALTER TABLE `tempat_sampah`
  MODIFY `id_tps` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dukungan_laporan`
--
ALTER TABLE `dukungan_laporan`
  ADD CONSTRAINT `dukungan_laporan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `dukungan_laporan_ibfk_2` FOREIGN KEY (`id_laporan`) REFERENCES `laporan` (`id_laporan`);

--
-- Constraints for table `laporan`
--
ALTER TABLE `laporan`
  ADD CONSTRAINT `laporan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
