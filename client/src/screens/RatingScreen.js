import React from 'react';
import { ScrollView } from 'react-native';
import RatingItem from '../components/RatingItem';
import globalStyles from '../styles/GlobalStyles';

const ratings = [
  { id: 1, name: 'Ahmet Yılmaz', description: 'Bu kişi kaynak tekniklerinde uzman.', rating: 4.5 },
  { id: 2, name: 'Mehmet Kaya', description: 'İleri seviye büküm teknikleri konusunda deneyimli.', rating: 4.2 },
  { id: 3, name: 'Ayşe Demir', description: 'Özel kaynak uygulamaları ve tekniklerinde bilgi sahibi.', rating: 5.0 },
  { id: 4, name: 'Fatma Çelik', description: 'Endüstriyel kaynak tekniklerinde uzman.', rating: 4.1 },
  { id: 5, name: 'Hasan Korkmaz', description: 'Metal büküm ve şekillendirme uzmanı.', rating: 3.9 },
  { id: 6, name: 'Emine Arslan', description: 'Kaynak güvenliği ve standartları konusunda uzman.', rating: 4.7 },
  { id: 7, name: 'Kemal Aksoy', description: 'İleri düzey kaynak ekipmanları eğitmeni.', rating: 4.3 },
  { id: 8, name: 'Selin Güler', description: 'Plastik kaynak teknikleri konusunda uzman.', rating: 4.6 },
  { id: 9, name: 'Ebru Şahin', description: 'Kaynak mühendisliği alanında profesyonel.', rating: 4.4 },
  { id: 10, name: 'Ali Vural', description: 'Tersane kaynak teknikleri konusunda deneyimli.', rating: 4.0 },
  { id: 11, name: 'Leyla Aydın', description: 'Otomotiv kaynak uzmanı.', rating: 4.2 },
  { id: 12, name: 'Burak Demir', description: 'Kaynak teknolojileri eğitmeni.', rating: 4.1 },
  { id: 13, name: 'Zeynep Yıldız', description: 'Paslanmaz çelik kaynak uzmanı.', rating: 4.8 },
  { id: 14, name: 'Murat Akar', description: 'Borulama ve kaynak teknikleri eğitmeni.', rating: 4.5 },
  { id: 15, name: 'Gizem Kılıç', description: 'Kaynak teknikleri ve yöntemleri konusunda profesyonel.', rating: 4.3 },
  { id: 16, name: 'Okan Özdemir', description: 'Kaynak mühendisliği eğitmeni.', rating: 4.4 },
  { id: 17, name: 'Nazan Uslu', description: 'Kaynak ve montaj teknikleri uzmanı.', rating: 4.6 },
  { id: 18, name: 'Bora Tekin', description: 'Kaynak süreçleri ve kalite kontrol uzmanı.', rating: 4.7 },
  { id: 19, name: 'Deniz Çakır', description: 'Ağır sanayi kaynak teknikleri eğitmeni.', rating: 4.5 },
  { id: 20, name: 'Pelin Doğan', description: 'Kaynak ve metalurji mühendisi.', rating: 4.4 },
];

const RatingScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      {ratings.map((item) => (
        <RatingItem
          key={item.id}
          name={item.name}
          description={item.description}
          rating={item.rating}
        />
      ))}
    </ScrollView>
  );
};

export default RatingScreen;
