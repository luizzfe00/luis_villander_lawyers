import React from 'react'
import Partner1 from '../../assets/vil1.jpeg'
import Partner2 from '../../assets/lais.jpeg'
import Partner3 from '../../assets/vivi.jpeg'
import Partner4 from '../../assets/deb.jpeg'
import Partner5 from '../../assets/gus.jpeg'
import Carousel from 'react-elastic-carousel'

import { Container, Background, ImageContainer, Name, Content, TextContainer, ContentContainer } from './styles';
import { TopLine } from '../InfoSection/styles';

const partners = [Partner1, Partner2, Partner3, Partner4, Partner5];
const partnerContent = [
  {
    name: 'Luis Villander',
    content: (
      <Content>
        Luis é natural de Campina Grande e iniciou suas atividades profissionais aos 16 anos, na atividade de vendedor, de casa em casa, de assinaturas de tv á cabo.
        No início de sua vida profissional atuou também como professor de inglês no CCAA, como professor de informática infantil em escolas estaduais, como zelador de escola pública e como bibliotecário de faculdade privada.
        Realizou também, no ano de 2020, consultorias financeiras em investimentos para advogados e empresários.
        Na carreira jurídica que iniciou-se com o ingresso na faculdade de direito da UEPB no ano de 2010, passou a ser estagiário no setor jurídico da secretaria de saúde de Campina Grande, órgão público onde foi galgando ascensões até se tornar diretor do setor jurídico onde havia ingressado como estagiário.
        Na função de diretor jurídico da secretaria de saúde de Campina Grande era responsável pela consultoria jurídica de todos os outro diretores do órgão e pela coordenação dos serviços de outros 4 advogados.
        Ele atuou também como estagiário em 3 escritórios de advocacia neste município, foi também advogado associado em outro escritório , até que no corrente ano inaugurou o LV advogados associados figurando na posição de diretor do mesmo.
        Na carreira acadêmica logrou as seguintes conquistas:
        Bacharel em Direito pela UEPB.
        Pós graduado em direito processual civil.
        Pós graduado em direito empresarial
        MBA em mercado financeiro e de capitais.
        Course of negotiation techniques da Universidade de Michigan (EUA).
        LLM em curso sobre direito tributário.
        Atualmente se dedica com exclusividade aos seus empreendimentos empresariais e ao nosso escritório.
      </Content>
    ),
  },
  {
    name: 'Lais',
    content: (
      <Content>
        Nascida e criada na Rainha da Borborema, Laís Patrícia se orgulha, sobretudo, em ter escolhido uma profissão na qual consegue ajudar diretamente seus conterrâneos e contribuir para que justiça seja feita em solo campinense.
        A sua trajetória acadêmica teve início aos 18 anos, ao ingressar no estimado curso de Direito da Universidade Estadual da Paraíba. Ali, Laís teve a certeza de estar no lugar certo no mundo e não tardou para que sua relação com o direito fosse além das portas da Universidade.
        Em seu currículo profissional, Laís esteve na advocacia pública, atuando no núcleo de Direito Previdenciário da Advocacia Geral da União; posteriormente, integrou o quadro da Defensoria Pública da União no município de Campina Grande. No âmbito estadual, desempenhou durante anos a função de conciliadora, no Tribunal de Justiça do Estado da Paraíba, levando em sua bagagem a experiência que só o dia a dia com a lida jurídica é capaz de proporcionar. 
        No ano de 2019, Laís iniciou iniciou sua atuação como advogada do Conselho Municipal de Saúde de Campina Grande, onde permanece até hoje assessorando acerca da fiscalização e implementação das principais demandas da saúde do município de Campina Grande.
        Nossa advogada segue em contínuo aperfeiçoamento, aliando sempre sua rotina profissional com cursos de atualização e pós-graduações, estudando constantemente para oferecer ao nosso cliente o que há de melhor e mais atualizado.
        Em nosso escritório, Laís atua na esfera cível, focada, sobretudo, no Direito Médico e no Direito Previdenciário, e está sempre disponível e interessada em ouvir seu problema e dar as melhores soluções!
      </Content>
    )
  },
  {
    name: 'Vitória',
    content: (
      <Content>
        Apresentando mais uma importante integrante do nosso escritório, trazemos a lume o perfil profissional da Dra. Vitória Albuquerque.
        Ela é natural de Campina Grande/PB, e iniciou sua trajetória profissional aos 15 anos, como professora de reforço de alunos do ensino fundamental e médio.
        Em 2013 ingressou na faculdade de direito da Universidade Estadual da Paraíba, e logo em seguida passou a ser monitora da disciplina Teoria Geral do Estado durante o período de 1 ano.
        Em 2015 iniciou suas atividades como estagiária, atuando em 2 escritórios de advocacia deste município e durante 1 ano desempenhou suas atividades como advogada em um deles.
        Em 2020 passou a trabalhar em parceria com o sócio fundador e diretor do LV Advogados Associados, permanecendo até o presente momento. Seu currículo acadêmico perfaz:
        <p>🔵Bacharela em Direito pela UEPB.</p>
        <p>🔵Pós graduada em Direito Processual pela PUC/MG.</p>
        Como associada ao LV Advogados Associados, trabalha com demandas da área cível, empresarial, imobiliária e sucessões.
      </Content>
    ),
  },
  {
    name: 'Débora',
    content: (
      <Content>
        Seguindo com a apresentação da nossa equipe de advogados fazemos constar agora o perfil profissional da Dra. Débora Lima.
        Aos 22 anos de idade concluía mais uma fase de sua vida educacional, se formava em Direito pela Faculdade de Ciências Aplicadas – Facisa, em Campina Grande no Estado da Paraíba.
        A graduação passou a fazer parte da vida da senhorita em 2013, quando, aos 17 anos, foi aprovado no vestibular.
        Durante sua vida acadêmica, além de estagiar no escritório modelo da referida faculdade atuando como mediadora, Débora participou do Programa MP Voluntário, na função de estagiária voluntária, exercendo suas atividades na Promotoria de Justiça de Defesa da Mulher da Comarca de Campina Grande-PB.
        Em 2019 chegou a hora de receber a tão sonhada carteira da Ordem dos Advogados do Brasil.
        No mesmo ano, ingressou na especialização em Direito Penal, Processo Penal e Investigação Criminal pela Fundação do Ministério Público – FESMIP.
        Em 2021, ingressou em sua segunda especialização, sendo atualmente pós-graduanda em Direito Público Municipal pela Universidade Católica de Salvador – UCSAL.
        Como associada no LV advogados trabalha majoritariamente com demanda de índole criminal e de direito público municipal.
      </Content>
    )
  },
  {
    name: 'Gustavo',
    content: (
      <Content> 
        Gustavo é natural de Campina Grande e iniciou suas atividades profissionais aos 18 anos, como jovem aprendiz na parte comercial  da CAGEPA.
        Em seguida, fez parte do Diretório Acadêmico Paulo Lopo Saraiva na função de Tesoureiro, onde restou incumbido de gerenciar toda parte financeira da entidade que representa os alunos de direito  da Unifacisa.
        Trabalhou também, como operador comercial do Banco Inter, nos setores de câmbio, renda fixa e renda variável, atuando primordialmente no suporte aos investidores na compra de ações, fundos imobiliários, derivativos e  conversão de moedas.
        Atualmente, na alçada juridica,  cursa o 7° período de direito na Unifacisa, estagiando no setor jurídico da Secretaria de Saúde de Campina Grande, auxiliando na seara de licitações e contratação direta de bens e serviços.
        No decurso do presente ano ingressou como estagiário e colaborador no LV advogados associados, agregando e aprendendo com a experiência dos advogados que compõe o escritório.
      </Content>
    )
  }
];

const PartnersSection = () => {
  return (
    <Container id="partners">
      <TopLine>Associados</TopLine>
      <Carousel itemsToShow={1} itemPosition="START">
        {partners.map((item, index) => (
          <ContentContainer>
            <ImageContainer>
              <Background Logo={item}/>
            </ImageContainer>
            <TextContainer>
              <Name>{partnerContent[index].name}</Name>
              {partnerContent[index].content}
            </TextContainer>
          </ContentContainer>
        ))}
      </Carousel>
    </Container>
  )
}

export default PartnersSection;
