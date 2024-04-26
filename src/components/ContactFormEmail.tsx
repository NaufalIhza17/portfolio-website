import {
  Html,
  Body,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Text className="text-lg font-bold">
                There is a message from {senderName}!
              </Text>
              <Text className="text-gray-500">{message}</Text>
              <Hr />
              <Text className="text-sm font-thin text-green-700">
                Sender&apos;s Email : {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
