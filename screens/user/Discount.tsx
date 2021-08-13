import React from "react";
import { Box, Text, ScrollView, Spacer } from "native-base";
import { DiscountCard } from "../../components/cards";
import { Topbar } from "../../components/ui";
export default function Discount({ navigation }: any) {
  return (
    <Box height="100%">
      <Topbar onPress={() => navigation.openDrawer()} title="DISCOUNTS" />
      <ScrollView mt="6">
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
        <DiscountCard
          title="New Vaggie Mix"
          normalPrice="9.99"
          discountedPrice="4.99"
        />
        <Spacer h="6" />
      </ScrollView>
    </Box>
  );
}
