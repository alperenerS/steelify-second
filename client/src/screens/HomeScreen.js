import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import homeScreenStyles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.header}>Kaynak ve Büküm</Text>
      <Card style={homeScreenStyles.topSection}>
        <Card.Cover source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg' }} />
        <Card.Content>
          <Title>DAHA GÜÇLÜ KAYNAK TEKNİKLERİ</Title>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => openLink('https://example.com/start-now')}>HEMEN BAŞLA</Button>
        </Card.Actions>
      </Card>
      <Card style={homeScreenStyles.section}>
        <Card.Content>
          <Title>Günlük Eğitimler</Title>
          <Button onPress={() => openLink('https://example.com/view-all')}>Tümünü Gör</Button>
        </Card.Content>
      </Card>
      <ScrollView horizontal>
        <Card style={homeScreenStyles.card}>
          <CustomVideoPlayer source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video1.mp4' }} style={homeScreenStyles.video} />
          <Card.Content>
            <Title>Temel Kaynak Teknikleri</Title>
            <Paragraph>Ahmet Yılmaz - Bu video, kaynak tekniklerinin temellerini öğrenmenize yardımcı olacaktır. Kaynak yapmanın incelikleri ve dikkat edilmesi gereken noktalar üzerinde durulmuştur.</Paragraph>
          </Card.Content>
        </Card>
        <Card style={homeScreenStyles.card}>
          <CustomVideoPlayer source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video2.mp4' }} style={homeScreenStyles.video} />
          <Card.Content>
            <Title>İleri Seviye Büküm</Title>
            <Paragraph>Mehmet Kaya - Bu eğitim videosunda, ileri seviye büküm teknikleri ve bu tekniklerin farklı malzemeler üzerindeki uygulamaları detaylı bir şekilde anlatılmaktadır.</Paragraph>
          </Card.Content>
        </Card>
        <Card style={homeScreenStyles.card}>
          <CustomVideoPlayer source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video3.mp4' }} style={homeScreenStyles.video} />
          <Card.Content>
            <Title>Özel Kaynak Uygulamaları</Title>
            <Paragraph>Ayşe Demir - Özel kaynak uygulamaları ve tekniklerinin yanı sıra, endüstride karşılaşılabilecek zorluklar ve bu zorlukların üstesinden nasıl gelinebileceği hakkında bilgiler verilmektedir.</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
      <Card style={homeScreenStyles.section}>
        <Card.Content>
          <Title>Blog Yazıları</Title>
        </Card.Content>
      </Card>
      <Card style={homeScreenStyles.blogCard} onPress={() => openLink('https://example.com/blog1')}>
        <Card.Cover source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg' }} />
        <Card.Content>
          <Title>Kaynak Tekniklerinde Uzmanlaşmak</Title>
          <Paragraph>Bu yazıda, kaynak tekniklerinde uzmanlaşmanın yollarını keşfedeceksiniz. Farklı kaynak tekniklerinin incelikleri ve pratik ipuçları ile uzman seviyesine ulaşmak için neler yapmanız gerektiğini öğrenin.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => openLink('https://example.com/blog1')}>Daha Fazla</Button>
        </Card.Actions>
      </Card>
      <Card style={homeScreenStyles.blogCard} onPress={() => openLink('https://example.com/blog2')}>
        <Card.Cover source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image3.jpg' }} />
        <Card.Content>
          <Title>Büküm Tekniklerinde Yenilikler</Title>
          <Paragraph>Büküm tekniklerinde son yenilikler ve uygulama alanları hakkında bilgi edinin. Bu makalede, endüstrideki en yeni büküm teknikleri ve bu tekniklerin avantajları ele alınmaktadır.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => openLink('https://example.com/blog2')}>Daha Fazla</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;
