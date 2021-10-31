/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="section logo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className={props.className} href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <Logo img_src={`${baseUrl}img/logo_splash_squadron.png`} />
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button className="button button-primary" href={docUrl("overview")}>Get Started</Button>
            <Button className="button button-secondary" href={docUrl("resources")}>Learn More</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        margin={props.margin}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h1>IdOps is a multi-tenant Identity Server resource management platform.</h1>
        <MarkdownBlock>
          IdOps is a platform which enables you to create, edit
          and publish identity server resources. IdOps can provide you
          a central resource management tool for all your identity server
          tenants and environments enhanced by an approval and auditing process.
        </MarkdownBlock>
      </div>
    );

    const GetStarted = () => (
      <Block layout="threeColumn" align="center">
        {[
          {
            title: "Setup",
            content: `Create a .NET Host for the IdOps by integrating the needed nuget packages. Build and deploy the host on your environment by providing the configuration for needed services as MongoDB and Azure ServiceBus.`,
          },
          {
            title: "Integrate",
            content: `Install the IdOps nuget packages within your Identity Server:
\`\`\`sh
dotnet add package IdOps.IdentityServer
dotnet add package IdOps.IdentityServer.Mongo
dotnet add package IdOps.IdentityServer.AzureServiceBus
\`\`\`
`
          },
          {
            title: "Use",
            content: `Configure tenants, define environments and Identity Servers, create resources, approve and publish them to the targeted Identity Server.`,
          },
          {}
        ]}
      </Block>
    );

    const Features1 = () => (
      <Block layout="fourColumn" background="light" align="center" className="featureImage">
        {[
          {
            title: "Tenants",
            image: `${baseUrl}img/idops_tenants.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_tenants.png`
          },
          {
            title: "Environments",
            image: `${baseUrl}img/idops_environments.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_environments.png`
          },
          {
            title: "Identity Servers",
            image: `${baseUrl}img/idops_identityserver.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_identityserver.png`
          },
          {
            title: "Resources",
            image: `${baseUrl}img/idops_client.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_client.png`
          }
        ]}
      </Block>
    );

    const Features2 = () => (
      <Block layout="fourColumn" align="center">
        {[
          {
            title: "Approval",
            image: `${baseUrl}img/idops_approval.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_approval.png`
          },
          {
            title: "Publish",
            image: `${baseUrl}img/idops_publish.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_publish.png`
          },
          {
            title: "Audit",
            image: `${baseUrl}img/idops_audit.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_audit.png`
          },
          {
            title: "Events",
            image: `${baseUrl}img/idops_events.png`,
            imageAlign: 'bottom',
            imageLink: `${baseUrl}img/idops_events.png`
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <GetStarted />
          <Features1 />
          <Features2 />
        </div>
      </div>
    );
  }
}

module.exports = Index;
