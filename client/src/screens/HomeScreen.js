import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import globalStyles from '../styles/globalStyles';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={styles.header}>Kaynak ve Büküm</Text>
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://example.com/strong-core.jpg' }}
          style={styles.topImage}
        />
        <Text style={styles.topText}>DAHA GÜÇLÜ KAYNAK TEKNİKLERİ</Text>
        <TouchableOpacity style={styles.topButton} onPress={() => openLink('https://example.com/start-now')}>
          <Text style={styles.topButtonText}>HEMEN BAŞLA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Günlük Eğitimler</Text>
        <TouchableOpacity onPress={() => openLink('https://example.com/view-all')}>
          <Text style={styles.viewAll}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.card}>
          <CustomVideoPlayer
            source={require('../assets/videos/sample_video1.mp4')}
            style={styles.video}
          />
          <Text style={styles.cardTitle}>Temel Kaynak Teknikleri</Text>
          <Text style={styles.cardSubtitle}>Ahmet Yılmaz - Bu video, kaynak tekniklerinin temellerini öğrenmenize yardımcı olacaktır. Kaynak yapmanın incelikleri ve dikkat edilmesi gereken noktalar üzerinde durulmuştur.</Text>
        </View>
        <View style={styles.card}>
          <CustomVideoPlayer
            source={require('../assets/videos/sample_video2.mp4')}
            style={styles.video}
          />
          <Text style={styles.cardTitle}>İleri Seviye Büküm</Text>
          <Text style={styles.cardSubtitle}>Mehmet Kaya - Bu eğitim videosunda, ileri seviye büküm teknikleri ve bu tekniklerin farklı malzemeler üzerindeki uygulamaları detaylı bir şekilde anlatılmaktadır.</Text>
        </View>
        <View style={styles.card}>
          <CustomVideoPlayer
            source={require('../assets/videos/sample_video3.mp4')}
            style={styles.video}
          />
          <Text style={styles.cardTitle}>Özel Kaynak Uygulamaları</Text>
          <Text style={styles.cardSubtitle}>Ayşe Demir - Özel kaynak uygulamaları ve tekniklerinin yanı sıra, endüstride karşılaşılabilecek zorluklar ve bu zorlukların üstesinden nasıl gelinebileceği hakkında bilgiler verilmektedir.</Text>
        </View>
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Blog Yazıları</Text>
      </View>
      <Card style={styles.blogCard} onPress={() => openLink('https://example.com/blog1')}>
        <Card.Content>
          <Title>Kaynak Tekniklerinde Uzmanlaşmak</Title>
          <Paragraph>
            Bu yazıda, kaynak tekniklerinde uzmanlaşmanın yollarını keşfedeceksiniz. Farklı kaynak tekniklerinin incelikleri ve pratik ipuçları ile uzman seviyesine ulaşmak için neler yapmanız gerektiğini öğrenin.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => openLink('https://example.com/blog1')}>Daha Fazla</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.blogCard} onPress={() => openLink('https://example.com/blog2')}>
        <Card.Content>
          <Title>Büküm Tekniklerinde Yenilikler</Title>
          <Paragraph>
            Büküm tekniklerinde son yenilikler ve uygulama alanları hakkında bilgi edinin. Bu makalede, endüstrideki en yeni büküm teknikleri ve bu tekniklerin avantajları ele alınmaktadır.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => openLink('https://example.com/blog2')}>Daha Fazla</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;
