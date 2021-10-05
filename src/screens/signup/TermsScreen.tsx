import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import styled from "styled-components/native";
import ContinueButton, { Font } from "../../components/ContinueButton";
import { colors, Fonts, other } from "../../constants";
import Screens, { RootStackParamList } from "../../constants/screens";

type TermsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.DISLIKES
>;
const TermsScreen: React.FC<TermsScreenProps> = ({ navigation }) => {
  const goHome = () => navigation.navigate(Screens.GO_ON_SCREEN);
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header>By continuing, you agree to our agreement</Header>
      <Terms>
        <Part>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          praesentium dolorem harum commodi quam possimus recusandae aliquam
          unde. Quaerat dolor rem obcaecati eius, ipsam minima fugit debitis
          quos, sit et dicta similique ad vero adipisci quia impedit porro ullam
          sapiente laborum? Itaque ipsam vero sint nobis non sed unde, dolor
          obcaecati laborum pariatur sunt saepe voluptatum praesentium, omnis id
          nemo ea molestiae labore, a nam recusandae! Optio unde possimus
          perferendis quam veniam quibusdam voluptatem nihil sunt culpa
          reprehenderit! Eos hic soluta nemo nulla laudantium aut quidem quae
          aliquam veritatis ipsa! Earum velit obcaecati nihil praesentium minima
          nisi officia ad expedita.
        </Part>
        <Part>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum magni
          modi doloremque illum quasi, sequi recusandae nobis veritatis ipsa
          dolor, error eum quibusdam possimus, consequuntur quisquam unde totam
          adipisci saepe facilis deserunt! Asperiores dicta quo, excepturi,
          fugit deserunt esse ipsam qui eius voluptatum assumenda dolorem sequi
          sit distinctio veritatis consectetur.
        </Part>
        <Part>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum mollitia
          quasi sint nisi officiis voluptatibus, illum dicta blanditiis,
          reprehenderit quam quos. Aliquam qui est laborum cupiditate mollitia?
          Nihil ex corporis ut iusto, perspiciatis perferendis libero quo
          obcaecati? Blanditiis voluptatem nihil possimus voluptate error
          expedita nostrum quidem. Voluptates facilis quasi, sint natus, illo
          pariatur labore impedit temporibus, ex ea dignissimos. Eligendi iste
          dolorum distinctio impedit ducimus tempore magni adipisci quos qui.
        </Part>
        <Part>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          beatae, quod dolor, optio recusandae neque aspernatur voluptate
          incidunt quis provident earum est sed, dignissimos temporibus dolores?
          Obcaecati, sunt? Ducimus quasi soluta id rem sint reprehenderit
          distinctio hic error consectetur minus eaque suscipit ex neque, odio
          rerum similique maxime? Illo facilis nobis assumenda, perspiciatis
          veritatis, voluptatibus aspernatur fuga beatae, consectetur saepe iure
          similique quasi adipisci consequatur culpa pariatur tempore.
          Voluptatum inventore debitis autem aperiam officiis recusandae fugit
          quam nulla nisi temporibus, odit velit sint alias culpa itaque tempore
          a quisquam eaque tempora error numquam ad ut assumenda explicabo! Nam
          placeat in perferendis alias, ut ex atque vel aspernatur vero hic
          nulla voluptate? Exercitationem odit cupiditate nisi sed magnam maxime
          veniam, sunt, fugit ad quae magni incidunt dolor corrupti cum nihil
          odio et ullam dolorum. Ad harum corporis officia quidem ea, quibusdam
          magnam, praesentium repellendus incidunt officiis enim vitae aperiam
          rerum doloribus.
        </Part>
        <Part>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste
          veritatis dolorem magni velit fuga ex non recusandae, nobis id!
        </Part>
        <Part>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad officia
          accusantium quasi eum velit sapiente iusto ex laborum ipsum! Voluptate
          ex, natus quam debitis aliquid omnis mollitia voluptas illo sit sunt,
          deserunt vero, expedita necessitatibus harum quia. Est exercitationem,
          vero reprehenderit dignissimos iure, facere dolorum qui hic ipsa sunt
          excepturi doloremque labore! Velit libero atque itaque autem deserunt
          molestias consequuntur odit quos, debitis ex eveniet excepturi,
          laborum suscipit quibusdam maiores quisquam et voluptates laboriosam
          fuga ea cupiditate doloremque ducimus nam nihil. Architecto nostrum
          illo ab blanditiis reiciendis iusto quidem iste inventore, rerum
          suscipit aliquam sapiente, at expedita possimus eveniet debitis amet
          quasi, et non. Dolor similique, nesciunt inventore deserunt alias
          impedit vel incidunt doloribus consectetur expedita repudiandae
          obcaecati ipsum veniam odio perspiciatis a. Eum debitis vero
          asperiores vitae animi hic aliquid atque labore earum sit nam
          aspernatur, illum, vel rerum ullam eligendi, fugiat nisi! Possimus
          vero, dolores vel modi autem excepturi, totam ullam quas laboriosam
          nesciunt ipsum molestiae ipsam nihil commodi mollitia exercitationem
          sapiente ad est officiis repudiandae illo veniam. Sunt velit
          consequuntur, tenetur dolorum natus optio iste illum corporis
          dignissimos neque, facilis repellendus et est error. Tenetur a debitis
          unde sequi, voluptate, ducimus mollitia eos deleniti dignissimos nobis
          itaque accusantium vitae quidem iusto illo nesciunt quae esse quo vero
          autem consectetur ea? Ex tempora voluptatem recusandae quibusdam
          laboriosam quasi harum, fuga doloribus cumque, iure hic, voluptatibus
          deleniti? Voluptatem quia fuga placeat velit laudantium facere libero
          neque eius, earum voluptates dignissimos nisi fugiat consequatur,
          expedita, mollitia autem temporibus exercitationem aliquam. Vel
          consectetur autem, nesciunt quibusdam deserunt perferendis voluptates
          molestiae sit rerum amet eum quasi voluptatibus quas, nemo quam
          suscipit? Dolorem inventore delectus sapiente fugiat commodi magnam,
          odit nam consequatur rem cupiditate qui quibusdam quisquam, quo minus
          tenetur iusto impedit et laudantium omnis. Fugit numquam voluptate
          asperiores, ipsa cum debitis sit.
        </Part>
      </Terms>
      <Submit>
        <Cancel style={{ flex: 1, marginHorizontal: 5 }} onPress={goHome}>
          <Font style={{ color: colors.black }}>Cancel Signup</Font>
        </Cancel>
        <ContinueButton style={{ flex: 1, marginHorizontal: 5 }} />
      </Submit>
    </Container>
  );
};
const Container = styled.View`
  padding: ${other.buttonPadding}px;
  background-color: ${colors.background};
  flex: 1;
`;
const Terms = styled.ScrollView`
  flex: 1;
  margin-bottom: ${other.buttonPadding}px;
`;
const Submit = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const Header = styled.Text`
  font-family: ${Fonts.PRIMARY_BOLD};
  padding-bottom: ${other.buttonPadding}px;
  font-size: 18px;
`;
const Part = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.PRIMARY};
  margin-bottom: 10px;
  margin-top: 10px;
  line-height: 20px;
`;

const Cancel = styled.TouchableOpacity`
  background-color: ${colors.background};
  padding: ${other.buttonPadding}px;
  justify-content: center;
  align-items: center;
  border-radius: ${other.borderRadius}px;

  border-width: 2px;
  border-color: ${colors.grey};
  border-style: solid;
`;

export default TermsScreen;
