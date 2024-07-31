import React from 'react';
import {ScrollView, Linking, View, Text} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import globalStyles from '../styles/GlobalStyles2';
import homeScreenStyles from '../styles/HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  const openLink = url => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[homeScreenStyles.header, globalStyles.text]}>
        Kaynak ve Büküm
      </Text>
      <Card style={[homeScreenStyles.topSection, globalStyles.card]}>
        <Card.Cover
          source={{
            uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg',
          }}
        />
        <Card.Content>
          <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
            DAHA GÜÇLÜ KAYNAK TEKNİKLERİ
          </Title>
        </Card.Content>
        <Card.Actions
          onPress={() =>
            openLink('https://example.com/start-now')
          }></Card.Actions>
      </Card>
      <Card style={[homeScreenStyles.section, globalStyles.card]}>
        <Card.Content>
          <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
            Günlük Eğitimler
          </Title>
          <Button
            mode="text"
            style={globalStyles.buttonSecondary}
            labelStyle={globalStyles.buttonSecondaryText}
            onPress={() => openLink('https://example.com/view-all')}>
            Tümünü Gör
          </Button>
        </Card.Content>
      </Card>
      <ScrollView horizontal>
        <View style={homeScreenStyles.cardContainer}>
          <Card style={[homeScreenStyles.card, globalStyles.card]}>
            <CustomVideoPlayer
              source={{
                uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video1.mp4',
              }}
              style={homeScreenStyles.video}
            />
            <Card.Content>
              <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
                Temel Kaynak Teknikleri
              </Title>
              <Paragraph
                style={[globalStyles.text, homeScreenStyles.cardSubtitle]}>
                Ahmet Yılmaz - Bu video, kaynak tekniklerinin temellerini
                öğrenmenize yardımcı olacaktır. Kaynak yapmanın incelikleri ve
                dikkat edilmesi gereken noktalar üzerinde durulmuştur.
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={[homeScreenStyles.card, globalStyles.card]}>
            <CustomVideoPlayer
              source={{
                uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video2.mp4',
              }}
              style={homeScreenStyles.video}
            />
            <Card.Content>
              <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
                İleri Seviye Büküm
              </Title>
              <Paragraph
                style={[globalStyles.text, homeScreenStyles.cardSubtitle]}>
                Mehmet Kaya - Bu eğitim videosunda, ileri seviye büküm
                teknikleri ve bu tekniklerin farklı malzemeler üzerindeki
                uygulamaları detaylı bir şekilde anlatılmaktadır.
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={[homeScreenStyles.card, globalStyles.card]}>
            <CustomVideoPlayer
              source={{
                uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video3.mp4',
              }}
              style={homeScreenStyles.video}
            />
            <Card.Content>
              <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
                Özel Kaynak Uygulamaları
              </Title>
              <Paragraph
                style={[globalStyles.text, homeScreenStyles.cardSubtitle]}>
                Ayşe Demir - Özel kaynak uygulamaları ve tekniklerinin yanı
                sıra, endüstride karşılaşılabilecek zorluklar ve bu zorlukların
                üstesinden nasıl gelinebileceği hakkında bilgiler verilmektedir.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
      <Card style={[homeScreenStyles.section, globalStyles.card]}>
        <Card.Content>
          <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
            Blog Yazıları
          </Title>
        </Card.Content>
      </Card>
      <Card
        style={[homeScreenStyles.blogCard, globalStyles.card]}
        onPress={() => openLink('https://example.com/blog1')}>
        <Card.Cover
          source={{
            uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg',
          }}
        />
        <Card.Content>
          <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
            Kaynak Tekniklerinde Uzmanlaşmak
          </Title>
          <Paragraph style={[globalStyles.text, homeScreenStyles.cardSubtitle]}>
            Bu yazıda, kaynak tekniklerinde uzmanlaşmanın yollarını
            keşfedeceksiniz. Farklı kaynak tekniklerinin incelikleri ve pratik
            ipuçları ile uzman seviyesine ulaşmak için neler yapmanız
            gerektiğini öğrenin.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="text"
            style={globalStyles.buttonSecondary}
            labelStyle={globalStyles.buttonSecondaryText}
            onPress={() => openLink('https://example.com/blog1')}>
            Daha Fazla
          </Button>
        </Card.Actions>
      </Card>
      <Card
        style={[homeScreenStyles.blogCard, globalStyles.card]}
        onPress={() => openLink('https://example.com/blog2')}>
        <Card.Cover
          source={{
            uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image3.jpg',
          }}
        />
        <Card.Content>
          <Title style={[globalStyles.text, homeScreenStyles.cardTitle]}>
            Büküm Tekniklerinde Yenilikler
          </Title>
          <Paragraph style={[globalStyles.text, homeScreenStyles.cardSubtitle]}>
            Büküm tekniklerinde son yenilikler ve uygulama alanları hakkında
            bilgi edinin. Bu makalede, endüstrideki en yeni büküm teknikleri ve
            bu tekniklerin avantajları ele alınmaktadır.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="text"
            style={globalStyles.buttonSecondary}
            labelStyle={globalStyles.buttonSecondaryText}
            onPress={() => openLink('https://example.com/blog2')}>
            Daha Fazla
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;
